class SplashUI extends TopLayer {
    constructor(props) {
        super(props);
        this.state = { project: "", hideSplash: false };
        this.splash = g("splash");
        dropSplashState = dropSplashState.bind(this);
    }

    render() {
        if (!this.state.hideSplash) {
            switch (window.project.id) {
                case "Garn Fawr":
                    return <div id="splash">
                        <div id="splashPanel">
                            <div className="splashScroller" id="spanSplash">
                                <div>
                                    <img src="img/favicon96.png" align="left" /> <span id="aboutEN">
                                        <h1>Map Digi Penfro</h1>
                                        <h3>Exploring Pembrokeshire from many perspectives</h3>
                                        <p>Welcome to the Beta version of Map Digi Penfro, a digital mapping tool
                                            that allows you to record what you think is important about the places of
                                            Pembrokeshire.
                                            The map is a work in progress to which you are invited to contribute.
                                        </p>
                                        <p>The points on this map record nature, poetry, science, art and history. They have
                                            been
                                            placed
                                            here by people young, old and in between who have contributed their knowledge,
                                            memories
                                            and ideas.</p>
                                        <p>Move the map around, click the coloured points, and discover the places we've roamed.
                                        </p>
                                        <p>You can add your own places to the map.
                                        </p>
                                        <p>The map is a bilingual space where you will encounter entries written in Welsh and
                                            English and other languages too.
                                            You are invited to contribute in the language of your choice. </p>
                                        <p>Here's a <a href="https://youtu.be/WXjlWxNtUto" target="video">video about making the
                                            map.</a></p>
                                        <p>Map Digi Penfro is a pilot project developed by Span Digidol tackling rural isolation
                                            and community well-being through innovative digital arts projects.</p>
                                    </span>
                                    <span id="aboutCYM" style={{ color: "darkblue" }}>
                                        <h1>Map Digi Penfro</h1>
                                        <h3>Archwilio Sir Benfro o sawl safbwynt.</h3>
                                        <p>Croeso i fersiwn Beta Map Digi Penfro, arf mapio digidol sy’n caniatáu i chi
                                            recordio beth rydych chi’n meddwl sydd yn bwysig am leoedd Sir Benfro.
                                            Gwaith ar y gweill yw’r map ac fe'ch gwahoddir i gyfrannu ato.</p>
                                        <p>Mae’r pwyntiau ar y map hwn yn cofnodi natur, barddoniaeth, gwyddoniaeth, celf a
                                            hanes.
                                            Fe’u gosodwyd yma gan bobl ifanc, pobl hen a phobl o bob oedran rhyngddynt,
                                            sydd wedi cyfrannu eu gwybodaeth, eu hatgofion a’u syniadau.</p>
                                        <p>Symudwch y map o gwmpas, cliciwch ar y pwyntiau lliw, a darganfyddwch y
                                            lleoedd rydyn ni wedi crwydro.</p>
                                        <p>Gallwch hefyd ychwanegu’r lleoedd sy’n bwysig i chi i’r map.
                                        </p>
                                        <p>Dyma <a href="https://youtu.be/WXjlWxNtUto" target="video">fideo am wneud y map</a>.
                                        </p>
                                        <p>Datblygwyd Map Digi Penfro trwy Span Digidol prosiect peilot sy’n archwilio
                                            ffyrdd y gall y celfyddydau a thechnoleg ddigidol
                                            weithio ochr yn ochr i fynd i’r afael â materion megis lles cymunedol ac ynysiad
                                            gwledig.</p>
                                    </span>
                                </div>
                                <div id="bottombox">
                                    <hr />
                                    <p id="loadingFlag" style={{ backgroundColor: "yellow" }}>Loading... | Llwytho...</p>
                                    <p>This site uses cookies. | Mae'r wefan hon yn defnyddio cwcis.
                                        <button id="continueButton" style={{ display: "none" }} className="continueButton"
                                            onClick={dropSplashState}>Continue
                                            | Parhewch</button>
                                    </p>
                                    <p><small><a href="https://www.span-arts.org.uk/" target="_blank" id="spanArtsLink">Span
                                        Arts</a> |
                                        <span id="privacyOpenLink">
                                            <a href="privacy.html#privacy" title="open in new window" target="_blank">Privacy
                                                | Preifatrwydd</a> </span>
                                        | <a href="img/user-guide.pdf" target="_blank" id="userGuideLink">User guide |
                                            Canllaw
                                            defnyddiwr</a>
                                        | <a href='#' onClick={toggleLanguage} id="toggleLanguageLink">Cymraeg</a>
                                    </small></p>
                                    <div>
                                        <img src="img/logo-ccc.jpg" />
                                        <img src="img/logo-eu.jpg" />
                                        <img src="img/logo-arwain.jpg" />
                                        <img src="img/logo-pcc.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="closeX boxClose" onClick={dropSplashState} style={{ display: "none" }} id="splashCloseX">
                                X</div>
                        </div>
                    </div>
                case "Folio":
                    return <div id="splash">
                        <div id="splashPanel">
                            <div className="splashScroller" id="folioSplash">
                                <img src="img/folio.png" style={{ width: "90%", height: "auto", margin: "auto" }} />
                                <h1>Telling Sutton's Stories</h1>
                                <h3>Join us in building a shared record of our memories and stories about Sutton Coldfield.</h3>
                                <p>Here you can contribute your notes, photos, old documents and more about our town.
                                    We want to collaboratively build a layered map exploring the different associations,
                                    memories and experiences that affect how we identify with our Town.
                                    We’d love you to contribute what matters and is of interest to you.
                                </p>
                                <p>Click the points on this map to see what people have recorded so far.</p>
                                <p>If you’d like to contribute, click <b style={{ color: "green" }}>Continue</b> and then, at top left,
                                    <b>Sign in</b>.
                                </p>
                                <p>If you’ve any questions, please don’t hesitate to get in touch:
                                    Just email <a href="mailto:map@foliosuttoncoldfield.org.uk">map@foliosuttoncoldfield.org.uk</a>
                                </p>
                                <hr />
                                <p id="loadingFlag" style={{ backgrounColor: "yellow" }}>Loading...</p>
                                <p>This site uses cookies.
                                    <button id="continueButton" style={{ display: "none" }} className="continueButton"
                                        onClick={dropSplashState}>Continue</button>
                                </p>
                                <p><a href="http://foliosuttoncoldfield.org.uk/telling-suttons-stories/" target="_blank">Read
                                    more</a>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a href="img/user-guide.pdf" target="_blank">Contributor guide</a>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a href="http://foliosuttoncoldfield.org.uk/telling-suttons-stories-terms/"
                                        target="_blank">Terms</a>

                                </p>
                            </div>
                            <div className="closeX boxClose" onClick={dropSplashState} style={{ display: "none" }} id="splashCloseX">
                                X</div>
                        </div>
                    </div>
                case "8dwn40fvv2":
                    return <div id="splash">
                        <div id="splashPanel">
                            <div className="splashScroller" id="testSplash">
                                <h1>Test project</h1>
                                <h3>You've got here by mistake</h3>
                                <p>Here you can contribute photos, notes, or sound clips about places of interest around Moylgrove.
                                    Join the places into an interesting walk. Visitors will follow the walk and see the material
                                    you've contributed as they go around.
                                </p>
                                <hr />
                                <p id="loadingFlag" style={{ backgroundColor: "yellow" }}>Loading...</p>
                                <p>This site uses cookies.
                                    <button id="continueButton" style={{ display: "none" }} className="continueButton"
                                        onClick={dropSplashState}>Continue</button>
                                </p>
                            </div>
                            <div className="closeX boxClose" onClick={dropSplashState} style={{ display: "none" }} id="splashCloseX">
                                X</div>
                        </div>
                    </div>
                case "ffordd":
                    return <div id="splash">
                        <div id="splashPanel">
                            <div className="splashScroller" id="fforddSplash">
                                <div>
                                    <img src="img/ffordd-logo.png" className="splashLogoAlignLeft" /> <span id="aboutEN">
                                        <h1>The Golden Road</h1>
                                        <h3>Exploring the Preseli trail in Pembrokeshire</h3>
                                        <p>The Golden Road is a name given to the ancient walkway that traverses the seven-mile
                                            ridge of Mynydd Preseli (the Preseli Mountains) running from Foel Drygarn to
                                            Bwlch-Gwynt.
                                        </p>
                                        <p>In the Summer of 2021 Span Arts are holding a series of workshop walks encircling the
                                            ridge
                                            of the Preselis. These sessions will be an opportunity to get to know this place from
                                            many perspectives, following different themes exploring and discovering the things (<i>y
                                                pethe</i>)
                                            that are important to people about this place. Workshop walks will include talks by
                                            invited
                                            experts, story swapping and sound recording with the opportunity to record these
                                            ramblings on to this digital map.
                                        </p>
                                        <p>
                                            These workshops form the first part of the project <i>Cân Y Ffordd Euraidd /
                                                The Song of the Golden Road</i> and will be followed by an intensive weekend of
                                            community music-making where participants and musicians will be invited to give
                                            voice to the songs of the place.  Speech, sound and song will then be incorporated
                                            into a radio ballad, an oral record of a unique place, that future generations can
                                            continue to appreciate and enjoy for years to come.
                                        </p>
                                        <p>By contributing to this map you agree that any photographs, documents and audio or film
                                            that you contribute to this project run by Span Arts on behalf of PLANED can be used for the purposes
                                            of creating the radio ballad <i>Song of the Golden Road.</i>  <br />
                                            <a href='img/permissions_form_golden_road.pdf'>Read the full terms of taking part in the project.</a></p>
                                        <p>
                                            This work forms part of the
                                            <a href="https://calonpreseli.planed.org.uk/" target="_blank"><i>Preseli
                                                Heartlands</i></a>
                                            project conducted by
                                            <a href="https://www.planed.org.uk/" target="_blank">PLANED</a> with the support
                                            of the Heritage Lottery Fund,
                                            and is being delivered in collaboration with
                                            <a href="https://span-arts.org.uk" target="_blank">Span Arts</a>.

                                        </p>
                                        <p></p>
                                    </span>
                                    <span id="aboutCYM" style={{ color: "darkblue" }}>
                                        <h1>Y Ffordd Euraidd</h1>
                                        <p>
                                            <i>Y Ffordd Euraidd</i> yw’r enw a roddir i lwybr troed hynafol sy’n tramwyo
                                            crib saith milltir mynyddoedd y Preselau o Foel Drygarn i Fwlch Gwynt.
                                        </p>
                                        <p>
                                            Yn ystod yr haf 2021 bydd Span yn cynnal cyfres o weithdai a theithiau
                                            cerdded o’r cymunedau sydd yn byw wrth droed y Preselau.
                                            Bydd y sesiynau hyn yn gyfle i ddod i adnabod y lle o wahanol bersbectifau,
                                            gan ddilyn gwahanol themau ac i ddarganfod a chwilota i’r ‘pethe’ sy’n bwysig
                                            i bobl am y lle. Bydd teithiau cerdded gweithdy yn cynnwys cyflwyniadau gan
                                            arbenigwyr a wahoddir, cyfleoedd i gyfnewid straeon, a recordio seiniau gyda’r
                                            cyfle i rocordio hyn oll ar fap <i>Y Ffordd Euraidd.</i>
                                        </p>
                                        <p>
                                            Mae’r gweithdai hyn yn rhan cychwynnol o’r brosiect <i>Cân Y Ffordd Euraidd</i>
                                            a dilynir gan benwythnos dwys o gerddora pan wahoddir y rhai sy’n cymryd
                                            rhan a cherddorion i roi llais i ganeuon y lle. Yna caiff llais, sain a
                                            chân eu hymgorffori I falad radio, cofnod llafar o le unigryw,
                                            un y bydd y cenedlaethau i ddod yn gallu eu gwerthfawrogi a’u mwynhau
                                            am flynyddoedd yn y dyfodol.
                                        </p>
                                        <p>Wrth gyfrannu at y map hwn rydych chi’n cytuno y gellir defnyddio unrhyw ffotograffau,
                                            dogfennau a sain neu ffilm gan y prosiect sy’n cael eu rhedeg gan Gelfyddydau
                                            ar ran PLANED er mwyn creu’r faled radio, <i>Cân y Ffordd Euraidd.</i>
                                            <a href="img/permissions_form_golden_road.pdf">Darllenwch dermau llawn cymryd rhan yn y prosiect.</a></p>
                                        <p>Mae’r gwaith yn rhan o brosiect
                                            <a href="https://www.planed.org.uk/" target="_blank">PLANED</a>
                                            <a href="https://calonpreseli.planed.org.uk/" target="_blank"><i>Ein Cymdogaeth
                                                Werin</i></a>
                                            a ariennir gan Gronfa Treftadaeth y Loteri a’i gyflwyno mewn
                                            partneriaeth â
                                            <a href="https://span-arts.org.uk" target="_blank">Celfyddydau SPAN</a>.
                                        </p>
                                        <p></p>
                                    </span>
                                </div>
                                <div id="bottombox">
                                    <hr />
                                    <p id="loadingFlag" style={{ backgroundColor: "yellow" }}>Loading... | Llwytho...</p>
                                    <p>This site uses cookies. | Mae'r wefan hon yn defnyddio cwcis.
                                        <button id="continueButton" style={{ display: "none" }} className="continueButton"
                                            onClick={dropSplashState}>Continue
                                            | Parhewch</button>
                                    </p>
                                    <p><small><a href="https://www.span-arts.org.uk/" target="_blank" id="spanArtsLink">Span
                                        Arts</a> |
                                        <span id="privacyOpenLink">
                                            <a href="privacy.html#privacy" title="open in new window" target="_blank">Privacy
                                                | Preifatrwydd</a> </span>
                                        | <a href="img/user-guide.pdf" target="_blank" id="userGuideLink">User guide |
                                            Canllaw
                                            defnyddiwr</a>
                                        | <a href='#' onClick={toggleLanguage} id="toggleLanguageLink">Cymraeg</a>
                                    </small></p>
                                    <div>
                                        <img src="img/logo-ccc.jpg" />
                                        <img src="img/logo-eu.jpg" />
                                        <img src="img/logo-arwain.jpg" />
                                        <img src="img/logo-pcc.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="closeX boxClose" onClick={dropSplashState} style={{ display: "none" }} id="splashCloseX">
                                X</div>
                        </div>
                    </div>
            }

        } else {
            return <div id="splash" style={{ display: "none" }}></div>
        }

    }
}


ReactDOM.render(React.createElement(SplashUI, null), document.getElementById('splashContainer')); 