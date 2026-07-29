export async function DA_PREFETCH(id) {

    // ALT
    const tmpDA  = await fetch(`DA.tmp`).then(r => r.text());
    const tmpNE  = await fetch(`NE.tmp`).then(r => r.text());
    const tmpBEN = await fetch(`BEN.tmp`).then(r => r.text());

    // NEU
    const room3 = await fetch(`DA-NC3×3.room`).then(r => r.text());
    const room6 = await fetch(`DA-NC6eX6D.room`).then(r => r.text());
    const room9 = await fetch(`DA-NC9×9.room`).then(r => r.text());

    return {
        id,
        alt: { tmpDA, tmpNE, tmpBEN },
        neu: { room3, room6, room9 },
        state: "prefetch-ready"
    };
}
