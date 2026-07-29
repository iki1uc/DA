export async function DA_AXIOM_PREFETCH() {

    // ALT
    const tmpDA  = await fetch(`DA.tmp`).then(r => r.text());
    const tmpNE  = await fetch(`NE.tmp`).then(r => r.text());
    const tmpBEN = await fetch(`BEN.tmp`).then(r => r.text());

    // NEU
    const room3 = await fetch(`DA-NC3×3.room`).then(r => r.text());
    const room6 = await fetch(`DA-NC6eX6D.room`).then(r => r.text());
    const room9 = await fetch(`DA-NC9×9.room`).then(r => r.text());

    // AUTO‑LOAD
    const autoFiles = [
        "1hml","3.html","6.html","9.html","12.html",
        "raum³.html","gitter.html","cluster.html","698869.html"
    ];

    const auto = {};
    for (const f of autoFiles) {
        auto[f] = await fetch(f).then(r => r.text()).catch(_ => "missing");
    }

    // AXIOME
    const axiome = {
        NE:  "fail",
        BEN: "rdy",
        KI:  "fit",
        DA:  "help"
    };

    return {
        axiome,
        alt: { tmpDA, tmpNE, tmpBEN },
        neu: { room3, room6, room9 },
        auto,
        state: "DA-AXIOM-PREFETCH-READY"
    };
}
