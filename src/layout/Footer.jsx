import '../styles/Footer.css';
import reactIcon from "../../src/assets/reactIcon.svg";

export default function Footer() {
    return (
        <div className="footer">
            <p className='portfolio'>Desenvolvido por</p>
            <p className='nome'><a href="https://www.linkedin.com/in/davi-mordonho-277948236/" target="_blank" rel="noopener noreferrer">@Davii_Lv</a></p>
            <img src={reactIcon} alt="reactIcon" />
        </div>

    )
}