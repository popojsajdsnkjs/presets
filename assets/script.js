const code = {
    "loading-bar-animation": `:root{
        /*change values to change the appearence*/
        --size-multiplier: 1; 
        --bar-max-width: 200px;
        --bar-min-width: 50px;
        --bar-height: 50px;
    
        --animation-length: 5s;
    
        --col-1: blue;
        --col-2: aqua;
        --col-3: lime;
    }
    
    #loading-bar{
        z-index: 10;
    }
    #loading-bar #container{
        max-width:calc(var(--bar-max-width) * var(--size-multiplier));
        max-height: calc(var(--bar-height) * var(--size-multiplier));
        height: calc(var(--bar-height) * var(--size-multiplier));
        width: calc(var(--bar-max-width) * var(--size-multiplier));
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    #loading-bar #container #load{
        border-radius: calc((var(--bar-height) * var(--size-multiplier))/2);
        height: calc(var(--bar-height) * var(--size-multiplier));
        animation: loading var(--animation-length) infinite;
        box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.5);
    }
    
    @keyframes loading {
        0%{
            width: calc(var(--bar-min-width) * var(--size-multiplier));
            background-color: var(--col-1);
        }
        25%{
            width: calc(var(--bar-max-width) * var(--size-multiplier));
            margin-left: 0px;
            background-color: var(--col-2);
        }
        50%{
            width: calc(var(--bar-min-width) * var(--size-multiplier));
            margin-left: calc(var(--bar-max-width) * var(--size-multiplier) - var(--bar-min-width) * var(--size-multiplier));
            background-color: var(--col-3);
        }
        75%{
            width: calc(var(--bar-max-width) * var(--size-multiplier));
            margin-left: 0px;
            background-color: var(--col-2);
        }
        100%{
            width: calc(var(--bar-min-width) * var(--size-multiplier));
            background-color: var(--col-1);
        }
    }
    
    /*
    how to implement
    
    <div id="loading-bar">
        <div id="container">
            <div id="load"></div>
        </div>
    </div>
    */`
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard successfully!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

document.getElementById('loading-bar-animation-button').onclick = copyToClipboard(code["loading-bar-animation"])