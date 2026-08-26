(function(){
    "use strict";

    const page = document.querySelector(".fournisseurs-page");
    const dataUrl = page ? page.dataset.fournisseursUrl : "/assets/data/fournisseurs.json";
    const root = document.getElementById("fournisseurs-annuaire");
    const searchInput = document.getElementById("fournisseurs-recherche");
    const countrySelect = document.getElementById("fournisseurs-pays");
    const specialtySelect = document.getElementById("fournisseurs-specialite");
    const counter = document.getElementById("fournisseurs-compteur");

    function normalize(value){
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function escapeHtml(value){
        return String(value || "")
            .replace(/&/g,"&amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;")
            .replace(/"/g,"&quot;")
            .replace(/'/g,"&#039;");
    }

    function supplierSearchText(s){
        const products = (s.products || []).flatMap(p => Object.values(p));
        return normalize([
            s.trade_name, s.country, s.address, s.postal_code, s.city,
            s.phone, s.email, s.website,
            ...(s.specialties || []),
            ...(s.groups || []),
            ...products
        ].join(" "));
    }

    function fillSelect(select, values){
        values.sort((a,b) => a.localeCompare(b,"fr",{sensitivity:"base"}));
        values.forEach(value => {
            const option=document.createElement("option");
            option.value=value;
            option.textContent=value;
            select.appendChild(option);
        });
    }

    function renderAddress(s){
        const parts=[];
        if(s.address) parts.push(escapeHtml(s.address));
        const locality=[s.postal_code,s.city].filter(Boolean).join(" ");
        if(locality) parts.push(escapeHtml(locality));
        return parts.join("<br>");
    }

    function renderSupplier(s){
        const specialties=(s.specialties || []).map(x =>
            `<span class="fournisseur-specialite">${escapeHtml(x)}</span>`
        ).join("");

        const products=(s.products || []).map(p => {
            const title=p.name ? `<strong>${escapeHtml(p.name)}</strong>` : "";
            const detail=[p.brand,p.reference,p.description].filter(Boolean).map(escapeHtml).join(" — ");
            if(!title && !detail) return "";
            return `<li>${title}${title && detail ? " — " : ""}${detail}</li>`;
        }).filter(Boolean).join("");

        const address=renderAddress(s);
        const actions=s.website ? `<div class="fournisseur-actions"><a href="${escapeHtml(s.website)}" target="_blank" rel="noopener noreferrer">Site officiel</a></div>` : "";

        return `<article class="fournisseur-carte">
            <h4>${escapeHtml(s.trade_name)}</h4>
            ${address ? `<p class="fournisseur-meta"><strong>Adresse</strong><br>${address}</p>` : ""}
            ${s.phone ? `<p class="fournisseur-meta"><strong>Téléphone</strong><br>${escapeHtml(s.phone)}</p>` : ""}
            ${s.email ? `<p class="fournisseur-meta"><strong>E-mail</strong><br><a href="mailto:${escapeHtml(s.email)}">${escapeHtml(s.email)}</a></p>` : ""}
            ${specialties ? `<div class="fournisseur-specialites">${specialties}</div>` : ""}
            ${products ? `<ul class="fournisseur-produits">${products}</ul>` : ""}
            ${actions}
        </article>`;
    }

    function render(suppliers){
        const groups={};
        suppliers.forEach(s => {
            const supplierGroups=(s.groups && s.groups.length) ? s.groups : ["Autres"];
            supplierGroups.forEach(group => {
                if(!groups[group]) groups[group]={};
                const country=s.country || "Pays non précisé";
                if(!groups[group][country]) groups[group][country]=[];
                groups[group][country].push(s);
            });
        });

        const groupNames=Object.keys(groups).sort((a,b)=>a.localeCompare(b,"fr",{sensitivity:"base"}));
        if(!groupNames.length){
            root.innerHTML='<p class="fournisseurs-vide">Aucun fournisseur ne correspond aux critères.</p>';
            return;
        }

        root.innerHTML=groupNames.map(group => {
            const countries=Object.keys(groups[group]).sort((a,b)=>a.localeCompare(b,"fr",{sensitivity:"base"}));
            return `<section class="fournisseurs-groupe">
                <h2>${escapeHtml(group)}</h2>
                ${countries.map(country => {
                    const list=groups[group][country].sort((a,b)=>a.trade_name.localeCompare(b.trade_name,"fr",{sensitivity:"base"}));
                    return `<section class="fournisseurs-pays">
                        <h3>${escapeHtml(country)}</h3>
                        <div class="fournisseurs-liste">${list.map(renderSupplier).join("")}</div>
                    </section>`;
                }).join("")}
            </section>`;
        }).join("");
    }

    function init(data){
        const suppliers=data.suppliers || [];
        fillSelect(countrySelect,[...new Set(suppliers.map(s=>s.country).filter(Boolean))]);
        fillSelect(specialtySelect,[...new Set(suppliers.flatMap(s=>s.specialties || []))]);

        function update(){
            const query=normalize(searchInput.value);
            const country=countrySelect.value;
            const specialty=specialtySelect.value;
            const terms=query ? query.split(/\s+/).filter(Boolean) : [];
            const filtered=suppliers.filter(s => {
                if(country && s.country !== country) return false;
                if(specialty && !(s.specialties || []).includes(specialty)) return false;
                const text=supplierSearchText(s);
                return terms.every(term=>text.includes(term));
            });
            counter.textContent=`${filtered.length} fournisseur${filtered.length > 1 ? "s" : ""}`;
            render(filtered);
        }

        searchInput.addEventListener("input",update);
        countrySelect.addEventListener("change",update);
        specialtySelect.addEventListener("change",update);
        update();
    }

    fetch(dataUrl)
        .then(response=>{
            if(!response.ok) throw new Error("Impossible de charger les données.");
            return response.json();
        })
        .then(init)
        .catch(error=>{
            console.error(error);
            root.innerHTML='<p class="fournisseurs-vide">L’annuaire ne peut pas être chargé actuellement.</p>';
        });
})();
