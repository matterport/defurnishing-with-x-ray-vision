class BeforeAfter {
    constructor(enteryObject) {

        const beforeAfterContainer = document.querySelector(enteryObject.id);
        const before = beforeAfterContainer.querySelector('.bal-before');
        const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
        const handle = beforeAfterContainer.querySelector('.bal-handle');
        var widthChange = 0;

        beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
        window.onresize = function () {
            beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
        }
        before.setAttribute('style', "width: 50%;");
        handle.setAttribute('style', "left: 50%;");

        //touch screen event listener
        beforeAfterContainer.addEventListener("touchstart", (e) => {

            beforeAfterContainer.addEventListener("touchmove", (e2) => {
                let containerWidth = beforeAfterContainer.offsetWidth;
                let currentPoint = e2.changedTouches[0].clientX;

                let startOfDiv = beforeAfterContainer.offsetLeft;

                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10) {
                    let newWidth = modifiedCurrentPoint * 100 / containerWidth;

                    before.setAttribute('style', "width:" + newWidth + "%;");
                    afterText.setAttribute('style', "z-index: 1;");
                    handle.setAttribute('style', "left:" + newWidth + "%;");
                }
            });
        });

        //mouse move event listener
        beforeAfterContainer.addEventListener('mousemove', (e) => {
            let containerWidth = beforeAfterContainer.offsetWidth;
            widthChange = e.offsetX;
            let newWidth = widthChange * 100 / containerWidth;

            if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
                before.setAttribute('style', "width:" + newWidth + "%;");
                afterText.setAttribute('style', "z-index:" + "1;");
                handle.setAttribute('style', "left:" + newWidth + "%;");
            }
        })

    }
}

// Sample data (you can replace this with your own logic to fetch image pairs)
const imagePairs = [
    // {after: "static/images/00023-zepmXAdrpjR/08e387692b154d4e88c1918b5da71cc2_eq_inpainted.jpg",
    // before: "static/images/00023-zepmXAdrpjR/08e387692b154d4e88c1918b5da71cc2_eq.jpg"},
    // {after: "static/images/00023-zepmXAdrpjR/9985900c24be46bfa6af793fb34e393d_eq_inpainted.jpg",  // we have this as comparison in supplementary, maybe add in
    // before: "static/images/00023-zepmXAdrpjR/9985900c24be46bfa6af793fb34e393d_eq.jpg"},
    {
        before: "static/images/27750c841e004f24b71cb1a30c57f847_eq.jpg",
        after: "static/images/27750c841e004f24b71cb1a30c57f847_eq_defurnished_cn.jpg",
    },
    {
        before: "static/images/2e3eb5ed1c2b422689bd6920078459ac_eq.jpg",
        after: "static/images/2e3eb5ed1c2b422689bd6920078459ac_eq_defurnished_cn.jpg"
    },
    {
        before: "static/images/3b49385430e142aa8251b52fdd7921f9_eq.jpg",
        after: "static/images/3b49385430e142aa8251b52fdd7921f9_eq_defurnished_cn.jpg"
    },
    // {after: "static/images/00683-KCvzhHEhdwB/926160b70cdf4ac8aedc43a3f8419a76_eq_inpainted.jpg",
    // before: "static/images/00683-KCvzhHEhdwB/926160b70cdf4ac8aedc43a3f8419a76_eq.jpg"},
    {
        before: "static/images/5bdfa8a121ce4ed8acea5f9645130eb6_eq.jpg",
        after: "static/images/5bdfa8a121ce4ed8acea5f9645130eb6_eq_defurnished_cn.jpg"
    },
    {
        before: "static/images/6b17a011f9894a709f22a0a7bf4ea71b_eq.jpg",
        after: "static/images/6b17a011f9894a709f22a0a7bf4ea71b_eq_defurnished_cn.jpg"
    },
    // {after: "static/images/hmm-00061-duthTPisf28/1a6fb3bee9344b4286abf067bae43672_eq_inpainted.jpg",
    // before: "static/images/hmm-00061-duthTPisf28/1a6fb3bee9344b4286abf067bae43672_eq.jpg"},
    // {after: "static/images/hmm-00395-giViJCyCH2C/9c3574fe00c44f42aac178ed4a9e9e80_eq_inpainted.jpg",
    // before: "static/images/hmm-00395-giViJCyCH2C/9c3574fe00c44f42aac178ed4a9e9e80_eq.jpg"},
    // {after: "static/images/hmm-00439-mjvN6RDLsPm/cbe88db9e5be4a3c84de4d3a8e71ca62_eq_inpainted.jpg",
    // before: "static/images/hmm-00439-mjvN6RDLsPm/cbe88db9e5be4a3c84de4d3a8e71ca62_eq.jpg"},
    {
        before: "static/images/f90112829bc2462980e0ec5b9c0809cc_eq.jpg",
        after: "static/images/f90112829bc2462980e0ec5b9c0809cc_eq_defurnished_cn.jpg"
    },
    // {after: "static/images/x-00053-kAMF2R7PCqX/99bbecc142d54f06adbb120f9866f543_eq_inpainted.jpg",
    // before: "static/images/x-00053-kAMF2R7PCqX/99bbecc142d54f06adbb120f9866f543_eq.jpg"},
    // {after: "static/images/x-00202-yVbpFay8gTU/87ad0734c0f14308a87f76f2e2311db2_eq_inpainted.jpg",
    // before: "static/images/x-00202-yVbpFay8gTU/87ad0734c0f14308a87f76f2e2311db2_eq.jpg"},
    // {after: "static/images/x-00202-yVbpFay8gTU/c1543515dc2446f4bcd81e054ac0968c_eq_inpainted.jpg",
    // before: "static/images/x-00202-yVbpFay8gTU/c1543515dc2446f4bcd81e054ac0968c_eq.jpg"},
    // {after: "static/images/x-00444-sX9xad6ULKc/f704b63b89444827997634eb2ef0d84f_eq_inpainted.jpg",
    // before: "static/images/x-00444-sX9xad6ULKc/f704b63b89444827997634eb2ef0d84f_eq.jpg"},
    // {after: "static/images/x-00466-xAHnY3QzFUN/aa0f1c2332244cfb923b2ba17250a3e9_eq_inpainted.jpg",
    // before: "static/images/x-00466-xAHnY3QzFUN/aa0f1c2332244cfb923b2ba17250a3e9_eq.jpg"},
    // {after: "static/images/x-00500-fKP4sxcoxpL/3d65ce651c8c485b97f4455e4a2af8f0_eq_inpainted.jpg",
    // before: "static/images/x-00500-fKP4sxcoxpL/3d65ce651c8c485b97f4455e4a2af8f0_eq.jpg"},
    // {after: "static/images/x-00504-frThKkhTwFT/8b7841921a104a198ae96028eae7415e_eq_inpainted.jpg",
    // before: "static/images/x-00504-frThKkhTwFT/8b7841921a104a198ae96028eae7415e_eq.jpg"},
    // {after: "static/images/x-00518-o1F5JVHc6mb/f90a14d6614d405e80d1b87d46f91a35_eq_inpainted.jpg",
    // before: "static/images/x-00518-o1F5JVHc6mb/f90a14d6614d405e80d1b87d46f91a35_eq.jpg"},
    // {after: "static/images/x-00694-Lva3QmSMsTr/227170fad76945fe894c4e8009ae8f52_eq_inpainted.jpg",
    // before: "static/images/x-00694-Lva3QmSMsTr/227170fad76945fe894c4e8009ae8f52_eq.jpg"},
    // {after: "static/images/x-00723-hWDDQnSDMXb/3775ccf21009446eae005d8290490be0_eq_inpainted.jpg",
    // before: "static/images/x-00723-hWDDQnSDMXb/3775ccf21009446eae005d8290490be0_eq.jpg"},
    // {after: "static/images/x-00863-b28CWbpQvor/2e6abb5034f249eb8d37fd0d586bb0b2_eq_inpainted.jpg",
    // before: "static/images/x-00863-b28CWbpQvor/2e6abb5034f249eb8d37fd0d586bb0b2_eq.jpg"},
    // {after: "static/images/x-00891-cvZr5TUy5C5/9ddba3dc494d4811839160c3021588c7_eq_inpainted.jpg",
    // before: "static/images/x-00891-cvZr5TUy5C5/9ddba3dc494d4811839160c3021588c7_eq.jpg"},
];

const comparisonPairs = [
    {
        before: "static/images/27750c841e004f24b71cb1a30c57f847_eq.jpg",
        after: "static/images/27750c841e004f24b71cb1a30c57f847_eq_defurnished_cn.jpg",
        blabel: "Input: Furnished",
        alabel: "Defurnished using our method"
    },
    {
        before: "static/images/00023-zepmXAdrpjR/9985900c24be46bfa6af793fb34e393d_eq_lama_10dilate.png",
        after: "static/images/00023-zepmXAdrpjR/9985900c24be46bfa6af793fb34e393d_eq_inpainted_comparesd.jpg",
        blabel: "LAMA + 10 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00023-zepmXAdrpjR/9985900c24be46bfa6af793fb34e393d_eq_inpainted_lgpn_dilate10_resized.jpg",
        after: "static/images/00023-zepmXAdrpjR/9985900c24be46bfa6af793fb34e393d_eq_inpainted_comparesd.jpg",
        blabel: "LGPN + 10 dilate",
        alabel: "Ours"
    },

    {
        before: "static/images/00162-1sM6KvYg3J5/a34d271e105744eabf60aa40f802c9d5_eq_vanilla_20dilate.jpg",
        after: "static/images/00162-1sM6KvYg3J5/a34d271e105744eabf60aa40f802c9d5_eq_inpainted_comparesd.jpg",
        blabel: "Vanilla SD + 20 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00162-1sM6KvYg3J5/a34d271e105744eabf60aa40f802c9d5_eq_lama_20dilate.png",
        after: "static/images/00162-1sM6KvYg3J5/a34d271e105744eabf60aa40f802c9d5_eq_inpainted_comparesd.jpg",
        blabel: "LAMA + 20 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00162-1sM6KvYg3J5/a34d271e105744eabf60aa40f802c9d5_eq_inpainted_lgpn_dilate10_resized.jpg",
        after: "static/images/00162-1sM6KvYg3J5/a34d271e105744eabf60aa40f802c9d5_eq_inpainted_comparesd.jpg",
        blabel: "LGPN + 10 dilate",
        alabel: "Ours"
    },

    {
        before: "static/images/00469-ochRmQAHtkF/eb59a0c1b01a4f7085fb3aec815cdde7_eq_vanilla_20dilate.jpg",
        after: "static/images/00469-ochRmQAHtkF/eb59a0c1b01a4f7085fb3aec815cdde7_eq_inpainted_comparesd.jpg",
        blabel: "Vanilla SD + 20 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00469-ochRmQAHtkF/eb59a0c1b01a4f7085fb3aec815cdde7_eq_lama_20dilate.png",
        after: "static/images/00469-ochRmQAHtkF/eb59a0c1b01a4f7085fb3aec815cdde7_eq_inpainted_comparesd.jpg",
        blabel: "LAMA + 20 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00469-ochRmQAHtkF/eb59a0c1b01a4f7085fb3aec815cdde7_eq_inpainted_lgpn_dilate10_resized.jpg",
        after: "static/images/00469-ochRmQAHtkF/eb59a0c1b01a4f7085fb3aec815cdde7_eq_inpainted_comparesd.jpg",
        blabel: "LGPN + 10 dilate",
        alabel: "Ours"
    },

    {
        before: "static/images/00862-LT9Jq6dN3Ea/ca9c4eca2d6f41aa8bf2d6a8a5407b15_eq_vanilla_10dilate.jpg",
        after: "static/images/00862-LT9Jq6dN3Ea/ca9c4eca2d6f41aa8bf2d6a8a5407b15_eq_inpainted_comparesd.jpg",
        blabel: "Vanilla SD + 10 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00862-LT9Jq6dN3Ea/ca9c4eca2d6f41aa8bf2d6a8a5407b15_eq_lama_10dilate.png",
        after: "static/images/00862-LT9Jq6dN3Ea/ca9c4eca2d6f41aa8bf2d6a8a5407b15_eq_inpainted_comparesd.jpg",
        blabel: "LAMA + 10 dilate",
        alabel: "Ours"
    },
    {
        before: "static/images/00862-LT9Jq6dN3Ea/ca9c4eca2d6f41aa8bf2d6a8a5407b15_eq_inpainted_lgpn_dilate10_resized.jpg",
        after: "static/images/00862-LT9Jq6dN3Ea/ca9c4eca2d6f41aa8bf2d6a8a5407b15_eq_inpainted_comparesd.jpg",
        blabel: "LGPN + 10 dilate",
        alabel: "Ours"
    },
];

const comparisonSets = [
    {
        ours: "static/images/27750c841e004f24b71cb1a30c57f847_eq_defurnished_cn.jpg",
        sd: "static/images/27750c841e004f24b71cb1a30c57f847_eq_defurnished_sd.jpg",
        cn_shelf: "static/images/27750c841e004f24b71cb1a30c57f847_eq_defurnished_cn_shelf.jpg",
    },

    {
        ours: "static/images/2e3eb5ed1c2b422689bd6920078459ac_eq_defurnished_cn.jpg",
        sd: "static/images/2e3eb5ed1c2b422689bd6920078459ac_eq_defurnished_sd.jpg",
        cn_shelf: "static/images/2e3eb5ed1c2b422689bd6920078459ac_eq_defurnished_cn_shelf.jpg",
    },

    {
        ours: "static/images/3b49385430e142aa8251b52fdd7921f9_eq_defurnished_cn.jpg",
        sd: "static/images/3b49385430e142aa8251b52fdd7921f9_eq_defurnished_sd.jpg",
        cn_shelf: "static/images/3b49385430e142aa8251b52fdd7921f9_eq_defurnished_cn_shelf.jpg",
    },

    {
        ours: "static/images/5bdfa8a121ce4ed8acea5f9645130eb6_eq_defurnished_cn.jpg",
        sd: "static/images/5bdfa8a121ce4ed8acea5f9645130eb6_eq_defurnished_sd.jpg",
        cn_shelf: "static/images/5bdfa8a121ce4ed8acea5f9645130eb6_eq_defurnished_cn_shelf.jpg",
    },

    {
        ours: "static/images/6b17a011f9894a709f22a0a7bf4ea71b_eq_defurnished_cn.jpg",
        sd: "static/images/6b17a011f9894a709f22a0a7bf4ea71b_eq_defurnished_sd.jpg",
        cn_shelf: "static/images/6b17a011f9894a709f22a0a7bf4ea71b_eq_defurnished_cn_shelf.jpg",
    },

    {
        ours: "static/images/f90112829bc2462980e0ec5b9c0809cc_eq_defurnished_cn.jpg",
        sd: "static/images/f90112829bc2462980e0ec5b9c0809cc_eq_defurnished_sd.jpg",
        cn_shelf: "static/images/f90112829bc2462980e0ec5b9c0809cc_eq_defurnished_cn_shelf.jpg",
    },

];

const comparisonSets2 = [
    {
        ours: "static/images/d62db60b49074791b96789d2c69214aa_skybox2_ours.jpg",
        instruct: "static/images/d62db60b49074791b96789d2c69214aa_skybox2_ig2g_removesofa_30k.jpg",
        nerfiller: "static/images/d62db60b49074791b96789d2c69214aa_skybox2_nerfiller_dilate7.jpg",
        original: "static/images/d62db60b49074791b96789d2c69214aa_skybox2_orig.jpg",
    },
    {
        ours: "static/images/15c706cb62ca4b40afa265bd32146e8d_skybox3_ours.jpg",
        instruct: "static/images/15c706cb62ca4b40afa265bd32146e8d_skybox3_ig2g_removesofa.jpg",
        nerfiller: "static/images/15c706cb62ca4b40afa265bd32146e8d_skybox3_nerfiller_dilate7.jpg",
        original: "static/images/15c706cb62ca4b40afa265bd32146e8d_skybox3_orig.jpg",
    },
    {
        ours: "static/images/e658e6a2de4643b0855b0c682ff53b21_skybox4_ours.jpg",
        instruct: "static/images/e658e6a2de4643b0855b0c682ff53b21_skybox4_ig2g_removesofa_30k.jpg",
        nerfiller: "static/images/e658e6a2de4643b0855b0c682ff53b21_skybox4_nerfiller_dilate11.jpg",
        original: "static/images/e658e6a2de4643b0855b0c682ff53b21_skybox4_orig.jpg",
    },
    {
        ours: "static/images/0b7b0f378d4d44099c46904d72d52925_skybox2_ours.jpg",
        instruct: "static/images/0b7b0f378d4d44099c46904d72d52925_skybox2_ig2g_removesofa_30k.jpg",
        nerfiller: "static/images/0b7b0f378d4d44099c46904d72d52925_skybox2_nerfiller_dilate7.jpg",
        original: "static/images/0b7b0f378d4d44099c46904d72d52925_skybox2_orig.jpg",
    },
];



// Function to generate HTML structure for image pairs
function generateImagePairs(imagePairs, containerId, prefix) {
    const imagesContainer = document.getElementById(containerId);

    // Loop through image pairs and generate HTML structure
    imagePairs.forEach((pair, index) => {
        const container = document.createElement('div');
        container.classList.add('container', 'is-centered');
        container.innerHTML = `
            <div class="columns is-centered has-text-centered">
                <div class="column is-max-desktop">
                    <h2 class="title is-4">Example ${index + 1}: ${pair.blabel || "Input"} vs ${pair.alabel || "Prediction"} </h2>
                    <div class="mainSection">
                        <div id="${prefix}-pair-${index}" class="bal-container">
                            <div class="bal-after">
                                <img src="${pair.after}">
                                <div class="bal-afterPosition afterLabel">${pair.alabel || "Output: Defurnished"}</div>
                            </div>
                            <div class="bal-before">
                                <div class="bal-before-inset">
                                    <img src="${pair.before}">
                                    <div class="bal-beforePosition beforeLabel">${pair.blabel || "Input: Furnished"}</div>
                                </div>
                            </div>
                            <div class="bal-handle">
                                <span class="handle-left-arrow"></span>
                                <span class="handle-right-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        imagesContainer.appendChild(container);

        new BeforeAfter({
            id: '#' + prefix + '-pair-' + index
        });
    });
}

/*function addOnePair(img, containerId, index, prefix) {
    const topContainer = document.getElementById(containerId);
    const newContainer = document.createElement('div');
    newContainer.classList.add('container', 'is-centered');
    newContainer.innerHTML = `
        <div class="content has-text-justified">
            <img src="${img}">
        </div>
    `;
    topContainer.appendChild(newContainer);
    new BeforeAfter({
        id: '#' + prefix + '-set-' + index
    });
}*/

function pairDiv(containerId, img1, img2, type, prefix, index) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div id="${prefix}-${index}" class="bal-container">
            <div class="bal-after">
                <img src="${img1}">
                <div class="bal-afterPosition afterLabel">Ours</div>
            </div>
            <div class="bal-before">
                <div class="bal-before-inset">
                    <img src="${img2}">
                    <div class="bal-beforePosition beforeLabel">${type}</div>
                </div>
            </div>
            <div class="bal-handle">
                <span class="handle-left-arrow"></span>
                <span class="handle-right-arrow"></span>
            </div>
        </div>
    `;

    new BeforeAfter({
        id: '#' + prefix + '-' + index
    });
}

function generateImageSets(imageSets, containerId) {
    const imagesContainer = document.getElementById(containerId);

    imageSets.forEach((set, index) => {
        const container = document.createElement('div');
        container.classList.add('container', 'is-centered');
        container.innerHTML = `
            <div class="columns is-centered has-text-centered">
                <div class="column is-max-desktop">
                    <h2 class="title is-4">Example ${index + 1}</h2>
                    <a class="button is-normal is-rounded is-light" onclick="pairDiv('container-comp-set-${index}', '${set.ours}', '${set.sd}', 'SD-2.0-inpainting', 'comp', ${index})">Compare to Vanilla SD</a>
                    <a class="button is-normal is-rounded is-light" onclick="pairDiv('container-comp-set-${index}', '${set.ours}', '${set.cn_shelf}', 'Thibaud Canny ControlNet', 'comp', ${index})">Compare to Thibaud Canny ControlNet</a>
                    <div id="container-comp-set-${index}" class="mainSection">
                        <div id="comp-${index}" class="bal-container">
                            <div class="bal-after">
                                <img src="${set.ours}">
                                <div class="bal-afterPosition afterLabel">Ours</div>
                            </div>
                            <div class="bal-before">
                                <div class="bal-before-inset">
                                    <img src="${set.sd}">
                                    <div class="bal-beforePosition beforeLabel">SD-2.0-inpainting</div>
                                </div>
                            </div>
                            <div class="bal-handle">
                                <span class="handle-left-arrow"></span>
                                <span class="handle-right-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                new BeforeAfter({
                    id: '#comp-${index}'
                });
            </script>
        `;
        imagesContainer.appendChild(container);

        new BeforeAfter({
            id: '#comp-' + index
        });
    });
}

function generateImageSets2(imageSets, containerId) {
    const imagesContainer = document.getElementById(containerId);

    imageSets.forEach((set, index) => {
        const container = document.createElement('div');
        container.classList.add('container', 'is-centered');
        container.innerHTML = `
            <div class="columns is-centered has-text-centered">
                <div class="column is-two-fifths">
                    <h2 class="title is-4">Example ${index + 1}</h2>
                    <a class="button is-normal is-rounded is-light" onclick="pairDiv('container-comp2-set-${index}', '${set.ours}', '${set.instruct}', 'Instruct-GS2GS', 'comp2', ${index})">Compare to Instruct-GS2GS</a>
                    <a class="button is-normal is-rounded is-light" onclick="pairDiv('container-comp2-set-${index}', '${set.ours}', '${set.nerfiller}', 'Nerfiller', 'comp2', ${index})"> &nbsp; &nbsp; Compare to Nerfiller &nbsp; &nbsp; </a>
                    <a class="button is-normal is-rounded is-light" onclick="pairDiv('container-comp2-set-${index}', '${set.ours}', '${set.original}', 'Original', 'comp2', ${index})"> &nbsp; &nbsp; &nbsp; Compare to input &nbsp; &nbsp; &nbsp; </a>
                    <div id="container-comp2-set-${index}" class="mainSection">
                        <div id="comp2-${index}" class="bal-container">
                            <div class="bal-after">
                                <img src="${set.ours}">
                                <div class="bal-afterPosition afterLabel">Ours</div>
                            </div>
                            <div class="bal-before">
                                <div class="bal-before-inset">
                                    <img src="${set.instruct}">
                                    <div class="bal-beforePosition beforeLabel">Instruct-GS2GS</div>
                                </div>
                            </div>
                            <div class="bal-handle">
                                <span class="handle-left-arrow"></span>
                                <span class="handle-right-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                new BeforeAfter({
                    id: '#comp2-${index}'
                });
            </script>
        `;
        imagesContainer.appendChild(container);

        new BeforeAfter({
            id: '#comp2-' + index
        });
    });
}