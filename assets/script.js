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
    */`,
    "header-banner":`/* potrzeba by dobrze wyglądało
        *{
            margin:0;
            box-sizing: border-box;
        }*/
        :root{
        /*adjust to your liking*/
            --text-color: white;
            --link-text-color: black;

            --banner-height: 170px;
            --banner-background-color: gray;
            --banner-shadow-color: rgba(0,0,0,0.9);

            --shadow-blur: 10px;

            --title-background: rgba(0,0,0,0);
            --menu-background: rgba(255,255,255,0.1);
            --menu-link-background: rgba(255,255,255,0.7);
            --menu-hover-link-background: rgba(255,255,255,1);

            --link-border: 15px;
            --link-font-size-mod: 5px; /*wartość bęzie odjęta od wielkości czcionki*/ 
            --font-adjuster: 100vw * 0.001; /*odejmuje wartość*/
        }

        header{
            user-select: none;
            height: var(--height);
            background-color: var(--banner-background-color);
            box-shadow: 0px 5px var(--shadow-blur) var(--banner-shadow-color);
            margin-bottom: 10px;
            width: 100vw;
        }
        
        header *{
            transition: 300ms;
            color: var(--text-color);
        }

        header h2{
            height: calc(var(--banner-height) / 2);
            line-height: calc(var(--banner-height) / 2);
            text-align: center;
            font-size: calc(var(--banner-height) / 2 * 0.8);
            background-color: var(--title-background);
        }

        header #menu{
            height: calc(var(--banner-height) / 2);
            line-height: calc(var(--banner-height) / 2);
            text-align: center;
            font-size: calc(var(--banner-height) / 2 * 0.4 - var(--link-font-size-mod) - var(--font-adjuster));
            background-color: var(--menu-background);
        }

        header #menu a{
            color:var(--link-text-color);
            text-decoration: none;
            padding: 10px;
            margin: 0px 10px 0px 10px;
            background-color: var(--menu-link-background);
            border-radius:var(--link-border);
        }

        header #menu a:hover{
            background-color: var(--menu-hover-link-background);
        }
    /* jak użyć
    </style>
    <header>
        <h2>Tytuł</h2>
        <div id="menu">
            <p>
                <a href="banner.html" class="menu-link">test1</a>
                <a href="banner.html" class="menu-link">test2</a>
            </p>
        </div>
    </header>
    */
    `
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard successfully!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

document.getElementById('loading-bar-animation-button').onclick = copyToClipboard(code["loading-bar-animation"])
document.getElementById('header-banner-button').onclick = copyToClipboard(code["header-banner"])