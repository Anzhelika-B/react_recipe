function Footer() {
    return (  
        <footer className="page-footer lime darken-1 ">
              
            <div className="footer-copyright">
                <div className="container">
                    <h6 className="center-align">
                        © { new Date().getFullYear()} Copyright Text
                    </h6>    
                </div>
            </div>

        </footer>
   );
}

export default Footer;