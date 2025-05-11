

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (event.target.closest("a[data-id]")) {
            const id = event.target.closest("a[data-id]").getAttribute("data-id");
            mostraDetalhes(id);
        }
    });
});

function mostraDetalhes(id){
    
    for(let i = 0; i < dados.lanchonetes.length; i++){
        let lanchonete = dados.lanchonetes[i]
        for(let j = 0; j < lanchonete.itens.length; j++){
            let item = lanchonete.itens[j]
                if(item.id == id){
                    if (item.semGluten && item.semLactose){
                        let modalContent = `
                            <div class="modal-header">
                                <div class="modal-title">Lanchonete - ${lanchonete.nome}
                                    <h5 class="modal-title fs-2">${item.titulo}</h5>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${item.imagem}"class="img-fluid mb-2 w-75 h-25 d-block mx-auto" style="max-width: 20rem; max-height: 20rem; object-fit: contain;">
                                <p>${item.descricao}</p>
                                    <div id="divQuantidade"> 
                                    </div>
                                <div class="alert alert-success d-inline-block" role="alert">Produto sem Lactose e sem Gluten!</div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                            <span class="fw-bold fs-5 text-dark">${item.valor}</span>
                                <div class="d-flex align-items-center gap-2"> 
                                    <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                    <label>0</label>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ` 
                    document.getElementById("modalContent").innerHTML = modalContent
                    return;

                    }else if(item.semLactose){
                        let modalContent = `
                            <div class="modal-header">
                                <div class="modal-title">Lanchonete - ${lanchonete.nome}
                                    <h5 class="modal-title fs-2">${item.titulo}</h5>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${item.imagem}"class="img-fluid mb-2 w-75 h-25 d-block mx-auto" style="max-width: 20rem; max-height: 20rem; object-fit: contain;">
                                <p>${item.descricao}</p>
                                    <div id="divQuantidade"> 
                                    </div>
                                <div class="alert alert-success d-inline-block" role="alert">Produto sem Lactose e sem Gluten!</div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                            <span class="fw-bold fs-5 text-dark">${item.valor}</span>
                                <div class="d-flex align-items-center gap-2"> 
                                    <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                    <label>0</label>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ` 
                    document.getElementById("modalContent").innerHTML = modalContent
                    return;
                    
                    }else if(item.semGluten){
                        let modalContent = `
                            <div class="modal-header">
                                <div class="modal-title">Lanchonete - ${lanchonete.nome}
                                    <h5 class="modal-title fs-2">${item.titulo}</h5>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${item.imagem}"class="img-fluid mb-2 w-75 h-25 d-block mx-auto" style="max-width: 20rem; max-height: 20rem; object-fit: contain;">
                                <p>${item.descricao}</p>
                                    <div id="divQuantidade"> 
                                    </div>
                                <div class="alert alert-success d-inline-block" role="alert">Produto sem Lactose e sem Gluten!</div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                            <span class="fw-bold fs-5 text-dark">${item.valor}</span>
                                <div class="d-flex align-items-center gap-2"> 
                                    <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                    <label>0</label>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ` 
                    document.getElementById("modalContent").innerHTML = modalContent
                    return;
                    }else{
                        let modalContent = `
                            <div class="modal-header">
                                <div class="modal-title">Lanchonete - ${lanchonete.nome}
                                    <h5 class="modal-title fs-2">${item.titulo}</h5>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${item.imagem}"class="img-fluid mb-2 w-75 h-25 d-block mx-auto" style="max-width: 20rem; max-height: 20rem; object-fit: contain;">
                                <p>${item.descricao}</p>
                                    <div id="divQuantidade"> 
                                    </div>
                                <div class="alert alert-success d-inline-block" role="alert">Produto sem Lactose e sem Gluten!</div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                            <span class="fw-bold fs-5 text-dark">${item.valor}</span>
                                <div class="d-flex align-items-center gap-2"> 
                                    <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
                                    <label>0</label>
                                    <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ` 
                    document.getElementById("modalContent").innerHTML = modalContent
                    return;
                }
            }
        }
    }
}