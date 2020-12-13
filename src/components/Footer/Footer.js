import "./Footer.css"
export default function Footer(props) {
    return (
        <footer className="Footer fixed-bottom sticky-bottom">
            <p>Copyright &copy; Crochet Corner {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    )
}

