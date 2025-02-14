
const About = () => {
    return (
        <div className=" bg-[#1E1E1E] about-container">
            <div className="container mx-auto text-white py-20">
                <h1 className="py-3 text-lg text-orange-400">About the Application</h1>
                <p className="tracking-[0.9px] leading-3">
                    This application is developed using React.js to provide a smooth and enjoyable user experience.
                    It aims to deliver valuable information to users and help them achieve their goals.
                </p>
                <h2>Features</h2>
                <ul className="list-disc p-3">
                    <li>Simple and user-friendly interface</li>
                    <li>Fast performance and efficiency</li>
                    <li>Support for various modern features</li>
                    <li>Dynamic interaction with users</li>
                </ul>
                <h2>Additional Information</h2>
                <p>
                    If you have any questions or feedback, feel free to reach out to us through the contact page.
                </p>
            </div>
        </div>
    )
}

export default About
