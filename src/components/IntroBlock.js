import './IntroBlock.scss';
import TypewriterBlock from './TypewriterBlock.js'

const msgTemplate = `About me:^

• Programming hobbyist for 5 years.^
• Python, Java, HTML/SASS/JS, jQuery, React, Node, Linux Shell.^
• In-depth knowledge of modern web standards.^

I also love making music, among other things...`

export default function IntroBlock() {
    return (
        <div className='IntroBlock'>
            <div>
                <h1>
                    <span>HI, I AM</span><br></br>
                    <span className='larger'>COLBY DEYTON</span><br></br>
                    <span className='smaller'><a href='javascript:window.open("https://musescore.com/user/13828931");'>MuseScore</a> <a href='javascript:window.open("https://github.com/ps4star");'>GitHub</a> <a href='mailto:colby.deyton@protonmail.com'>Email</a></span>
                </h1>
            </div>
            <div>
                <TypewriterBlock msg={msgTemplate} />
            </div>
        </div>
    );
}