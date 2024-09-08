class RateComponent extends HTMLElement{
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
            <img src="" alt="">
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
            <form action="">
                <label for="">
                    <input type="radio" name="radios" id="rate-one" value="1">1
                </label>
                <label for="">
                    <input type="radio" name="radios" id="rate-two" value="1">2
                </label>
                <label for="">
                    <input type="radio" name="radios" id="rate-three" value="1">3
                </label>
                <label for="">
                    <input type="radio" name="radios" id="rate-four" value="1">4
                </label>
                <label for="">
                    <input type="radio" name="radios" id="rate-five" value="1">5
                </label>
                <button>Submit</button>
            </form>
        </article>
        `
    }
}

customElements.define('rate-component', RateComponent);