import React from 'react'

function page() {
    return (
        <div>
            <div className="m-auto p-5 md:p-20">
                <h1 className="text-4xl leading-normal font-extrabold text-[#3D0C11] text-center mb-16">
                    Privacy <span className="text-[#D14D72]">Policy</span>
                </h1>
                <h2 className='text-2xl sm:text-3xl my-5 font-marcellus font-medium w-fit rounded-lg p-2 border-b-4 border-[#3D0C11] text-[#D14D72]'>How we collect and use Your Information:</h2>
                <p className='text-xl md:text-2xl text-[#3D0C11] text-justify mb-5 font-averia'>We collect certain information when you visit our website.
                    This information may include your IP address, browser type, operating system,
                    device information, and other data related to your use of our services.
                    We use this information to improve our services and provide you with a better user experience.</p>

                <p className='text-xl md:text-2xl text-[#3D0C11] text-justify mb-5 font-averia'>We store personal information you provide when you place an order such as name, address,
                    telephone number, and email address on our secure server located in Canada. We do not
                    share this information with any third party or other organization for any reason.</p>

                <p className='text-xl md:text-2xl text-[#3D0C11] text-justify mb-5 font-averia'>We also use Google Analytics to collect data about your visit to our website, including
                    the pages you view, the links you click, and other actions you take. This information
                    is collected anonymously and is used to analyze website traffic, user behavior, and
                    other important metrics.</p>

                <h2 className='text-2xl sm:text-3xl my-5 font-marcellus font-medium w-fit rounded-lg p-2 border-b-4 border-[#3D0C11] text-[#D14D72]'>How you can change cookie settings:</h2>
                <p className='text-xl md:text-2xl text-[#3D0C11] text-justify mb-5 font-averia'>Different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies.
                    Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.</p>
                <section className='text-[#3D0C11] sm:border-l-8 sm:border-[#3D0C11] sm:p-10'>
                    <p className='text-2xl font-bold font-marcellus mb-4'>Chrome: <a href='https://support.google.com/accounts/answer/32050' className='text-lg sm:text-xl underline font-mono text-[#D14D72] hover:text-[#3D0C11] hover:duration-150 block break-words'>https://support.google.com/accounts/answer/32050</a></p>
                    <p className='text-2xl font-bold font-marcellus mb-4'>Safari: <a href='https://support.apple.com/en-in/guide/safari/sfri11471/mac' className='text-lg sm:text-xl underline font-mono text-[#D14D72] hover:text-[#3D0C11] hover:duration-150'> https://support.apple.com/en-in/guide/safari/sfri11471/mac</a></p>
                    <p className='text-2xl font-bold font-marcellus mb-4'>Firefox: <a href='https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US' className='text-lg sm:text-xl underline font-mono text-[#D14D72] hover:text-[#3D0C11] hover:duration-150'>https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US</a></p>
                    <p className='text-2xl font-bold font-marcellus mb-4'>Internet Explorer: <a href='https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc' className='text-lg sm:text-xl underline font-mono text-[#D14D72] hover:text-[#3D0C11] hover:duration-150'>https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a></p>
                </section>
                <p className='text-xl font-bold font-marcellus mt-5'>If you are using any other web browser, please visit your browser's official support documents.</p>
            </div>
        </div>
    )
}

export default page