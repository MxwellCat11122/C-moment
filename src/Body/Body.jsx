import './Body.css'
import JavaScriptBody from '../assets/JavaScirptBody.svg'
import ReactBody from '../assets/ReactBody.png'
import CBody from '../assets/CBody.png'
import Cplus from '../assets/cplusbody.jpg'
import PythonBody from '../assets/PythonBody.webp'

function Body() {
    return(
        <>
    <div className="divj">
        <img src={JavaScriptBody} alt="js logo" />
        <p><h1 className='jsh1'>JavaScript</h1> (англ. /ˈdʒɑːvəskrɪpt/; аббр. JS) — мультипарадигменный язык программирования.держивает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[2]).  
        JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений</p>
    </div>
    <div className='divr'>
        <img className="react" src={ReactBody} alt="React logo" />
        <p><h1 className='reacth1'>React</h1> (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным кодом для разработки пользовательских интерфейсов.
        React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций</p>
    </div>
    <div className='divc'>
        <img className='c' src={CBody}/>
        <p><h1 className='ch1'>C#</h1>объектно-ориентированный язык программирования общего назначения. Разработан в 1998—2001 годах группой инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота</p>
    </div>
    <div className='divcplusplus'>
        <img className='c++' src={Cplus}/>
        <p><h1 className='Cplush1'>C++</h1>C++ (читается си-плюс-плюс[3][4]) — компилируемый, статически типизированный язык программирования общего назначения.
                                            Является мультипарадигменным языком программирования: поддерживаются такие парадигмы, как процедурное программирование, объектно-ориентированное программирование, обобщённое программирование, функциональное программирование. </p>
    </div>
    <div className='divpython'>
        <img className='Python' src={PythonBody}/>
        <p><h1 className='Pythonh1'>Python</h1>(МФА: [ˈpaɪθ(ə)n]; в русском языке встречаются названия пито́н[9] или па́йтон[10]) — мультипарадигменный высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью[1][11], ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ[12].</p>
    </div>
        </>
    )
}
export default Body