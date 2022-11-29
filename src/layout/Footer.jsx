import reactIcon from "../../src/assets/reactIcon.svg";

export default function Footer() {
    return (
        <div className="footer">
            <p className='portfolio'>Portifolio desenvolvido por</p>
            <p className='nome'>@Davii_Lv</p>
            <img src={reactIcon} alt="reactIcon" />
        </div>
        
    )
}