let botao = document.querySelector(".botao-gerar")
let chave = "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"
let endereco ="https://api.groq.com/openai/v1/chat/completions"
async function gerarCodigo(){
    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")
    let resultadoCodigo = document.querySelector(".resultado-codigo")
    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "system",
                content: "Você é um gerador de código HTML e CSS. Responda somente com código puro. NUNCA use crases, markdown ou explicações, FOrmato: primeiro <style> com o CSS, depois o HTML. SIga EXATAMENTE o que o usuário pedir. Se pedir algo quicando use @keyframes. Se pedir algo girando, use rotate. Garanta que o corpo (body) tenha margin:0 e o conteúdo esteja centralizado com flexbox para aparecer no meio do preview."
            },
            {
                role: "user",
                content: textoUsuario
            }
        ]
    })

    })
    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado

    
}
botao.addEventListener("click", gerarCodigo)

