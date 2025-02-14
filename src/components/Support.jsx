
const Support = () => {
    return (
        <div className="support-container   bg-[#3F181C]  py-14 min-h-[100vh]" >
            <div className="container mx-auto text-white">
                <h1 className="text-2xl text-orange-400 my-3">Support</h1>
                <p className="text-2xl tracking-[0.9px]  my-3">
                    We are here to help you! If you have any questions or issues, please reach out to our support team.
                </p>
                <h2 className="text-3xl text-orange-400 my-3">Contact Us</h2>
                <p>
                    You can contact us via the following methods:
                </p>
                <ul className="leading-7 tracking-[0.9px] my-4">
                    <li>Email: support@example.com</li>
                    <li>Phone: +1 (234) 567-890</li>
                    <li>Live Chat: Available on our website</li>
                </ul>
                <h2 className="text-3xl text-orange-400 my-3">FAQs</h2>
                <p className="tracking-[0.9px] my-4">
                    Check out our <a href="/faqs">Frequently Asked Questions</a> page for quick answers to common queries.
                </p>
                <h2 className="tracking-[0.9px] my-4">Support Hours</h2>
                <p className="tracking-[0.9px] my-4">
                    Our support team is available from Monday to Friday, 9 AM to 5 PM (UTC).
                </p>
            </div>
        </div>
    );
};

export default Support;