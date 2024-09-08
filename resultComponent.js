class ResultComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <article>
            <h1>Well done!</h1>
        </article>
        `
    }
}

customElements.define('result-component', ResultComponent);