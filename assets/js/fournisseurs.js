(() => {
    const root = document.getElementById('fournisseurs-resultats');
    if (!root) return;
    const search = document.getElementById('fournisseurs-recherche');
    const country = document.getElementById('fournisseurs-pays');
    const specialty = document.getElementById('fournisseurs-specialite');
    const counter = document.getElementById('fournisseurs-compteur');
    let suppliers = [];

    const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
    const text = s => [s.trade_name,s.country,s.city,s.website,...(s.specialties||[]),...(s.products||[]).flatMap(p=>[p.name,p.brand,p.reference,p.description])].filter(Boolean).join(' ').toLowerCase();

    function fillSelects(){
        [...new Set(suppliers.map(s=>s.country).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr')).forEach(v=>country.insertAdjacentHTML('beforeend',`<option value="${esc(v)}">${esc(v)}</option>`));
        [...new Set(suppliers.flatMap(s=>s.specialties||[]))].sort((a,b)=>a.localeCompare(b,'fr')).forEach(v=>specialty.insertAdjacentHTML('beforeend',`<option value="${esc(v)}">${esc(v)}</option>`));
    }

    function render(){
        const q=search.value.trim().toLowerCase(); const co=country.value; const sp=specialty.value;
        const filtered=suppliers.filter(s=>(!q||text(s).includes(q))&&(!co||s.country===co)&&(!sp||(s.specialties||[]).includes(sp)));
        counter.textContent=`${filtered.length} fournisseur${filtered.length>1?'s':''}`;
        const groups={}; filtered.forEach(s=>(groups[s.country||'Pays non précisé']??=[]).push(s));
        root.innerHTML=Object.keys(groups).sort((a,b)=>a.localeCompare(b,'fr')).map(c=>`<section class="fournisseurs-pays"><h2>${esc(c)}</h2>${groups[c].map(s=>`
            <article class="fournisseur-card"><h3>${esc(s.trade_name)}</h3>
            ${s.address?`<div class="fournisseur-meta">${esc(s.address)}</div>`:''}
            ${(s.postal_code||s.city)?`<div class="fournisseur-meta">${esc([s.postal_code,s.city].filter(Boolean).join(' '))}</div>`:''}
            ${s.phone?`<div class="fournisseur-meta">Téléphone : ${esc(s.phone)}</div>`:''}
            ${s.email?`<div class="fournisseur-meta">E-mail : <a href="mailto:${esc(s.email)}">${esc(s.email)}</a></div>`:''}
            ${s.specialties?.length?`<div class="fournisseur-specialites">${s.specialties.map(esc).join(' · ')}</div>`:''}
            <div class="fournisseur-site"><a href="${esc(s.website)}" target="_blank" rel="noopener noreferrer">Site officiel</a></div></article>`).join('')}</section>`).join('') || '<p>Aucun fournisseur ne correspond aux critères.</p>';
    }

    fetch('{{ "/assets/data/fournisseurs.json" | relative_url }}').then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(data=>{suppliers=data;fillSelects();render()}).catch(()=>{counter.textContent='';root.innerHTML='<p>Impossible de charger l’annuaire.</p>';});
    [search,country,specialty].forEach(el=>el.addEventListener('input',render));
    [country,specialty].forEach(el=>el.addEventListener('change',render));
})();
