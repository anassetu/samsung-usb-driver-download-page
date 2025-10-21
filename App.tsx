
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FeatureCard } from './components/FeatureCard';
import { DriverVersionCard } from './components/DriverVersionCard';
import { InstallationStep } from './components/InstallationStep';
import { FaqSection } from './components/FaqSection';

const App: React.FC = () => {

  const features = [
    { icon: <i className="fa-solid fa-check-circle"></i>, title: 'Free', text: 'The Samsung USB Drivers are entirely free of cost. So there is no need to pay anything to use the Software.' },
    { icon: <i className="fa-solid fa-check-circle"></i>, title: 'Official', text: 'Samsung Community officially makes the Samsung USB driver. It is available for the public to connect the Samsung devices to the computer.' },
    { icon: <i className="fa-solid fa-shield-alt"></i>, title: 'Secure', text: 'The Samsung USB Drivers are 100% secure as it is made and offered directly by Samsung Community.' },
    { icon: <i className="fa-solid fa-plus-circle"></i>, title: 'Compatible', text: 'Samsung USB Driver is compatible with Windows Computer. Whether it is new or old, both 32-bit and 64-bit are supported.' },
    { icon: <i className="fa-solid fa-paper-plane"></i>, title: 'Supported', text: 'The Samsung USB Driver support all the Samsung Smartphones and Tablets running on the Android OS.' },
    { icon: <i className="fa-solid fa-sync-alt"></i>, title: 'Updated', text: 'The Samsung USB driver shared on this page is constantly updated to the latest version.' },
  ];

  const driverVersions = [
    { version: 'v1.9.0.0', isNew: true },
    { version: 'v1.7.61.0' },
    { version: 'v1.7.59.0' },
    { version: 'v1.7.58.0' },
    { version: 'v1.7.56.0' },
    { version: 'v1.7.50.0' },
    { version: 'v1.7.48.0' },
    { version: 'v1.7.46.0' },
    { version: 'v1.7.43.0' },
    { version: 'v1.7.31.0' },
  ];

  const installSteps = [
    { number: 1, text: 'Download and extract the Samsung USB Driver on the Computer.' },
    { number: 2, text: 'Once the Samsung USB Driver is extracted, you will get the Samsung-USB-Driver.exe file.', image: 'https://i.imgur.com/g8vB6pY.png' },
    { number: 3, text: 'Double-Click on the Samsung-USB-Driver.exe file to launch the Setup Window.' },
    { number: 4, text: 'Once the Setup Window is launched, Click on the Next button.', image: 'https://i.imgur.com/kYmFfT1.png' },
    { number: 5, text: 'Select the language as per your choice, then select your Region. Then click on the Next button.', image: 'https://i.imgur.com/Z4O8s8c.png' },
    { number: 6, text: 'Click on the Install button.', image: 'https://i.imgur.com/7bJd3gU.png' },
    { number: 7, text: 'Now, Samsung Drivers will be installed on the computer.', image: 'https://i.imgur.com/O6t4b3f.png' },
    { number: 8, text: 'Once the installation is completed, Click on the Finish button.', image: 'https://i.imgur.com/2s4f2yV.png' },
    { number: 9, text: 'Restart the Computer. Once the computer is restarted, you can easily connect the Samsung devices to the computer.' },
  ];
  
  const faqs = [
      { q: "What is Samsung USB Drivers?", a: "Samsung USB Driver allows a Windows computer to recognize and communicate with Samsung devices, such as smartphones, tablets, and other mobile devices. These drivers are necessary if you want to transfer files between your Samsung device and your computer or if you want to use your Samsung device with various software tools, such as Odin or Samsung Kies." },
      { q: "For which platforms are Samsung Android USB Driver available?", a: "The Samsung USB Driver is available for all computers running on Windows OS, whether Windows XP or the latest Windows 11. Both 32-bit and 64-bit computers are supported. Unfortunately, it is unavailable for Mac OS X computers or macOS and Linux at the moment." },
      { q: "Is Samsung USB Driver free?", a: "Yes. The Samsung USB Driver is 100% free since the Samsung community officially releases it for Samsung Smartphone and Tablet users. Samsung device owners can find the exact Samsung drivers on the Samsung Support forums." },
      { q: "Is Samsung USB Driver safe?", a: "Yes. The Samsung USB Driver is 100% safe for the Windows computer, and Samsung mobile. Furthermore, since the Samsung community officially releases the driver, it's 100% safe and secure to use on the computer." },
      { q: "How often is the Samsung USB driver updated?", a: "There is no fixed schedule during which Samsung updates the USB drivers. Instead, updates are released to fix bugs and improve performance when needed. All updates come directly from Samsung." },
      { q: "How can I install Samsung USB Driver?", a: "You can install the Samsung USB Driver by downloading the .exe file and installing the driver on the Computer. The installation process is quite similar to the standard Windows Application. You can follow the How to install the Samsung Driver guide to install the drivers correctly." },
      { q: "What devices does Samsung USB Driver work with?", a: "Samsung USB Drivers are explicitly designed for Samsung smartphones and tablets running on Android OS. The Samsung USB Driver fully supports all Samsung smartphones and tablets. It may or may not work for other devices." },
      { q: "Does Samsung USB Driver require an internet connection to use?", a: "No. The Samsung USB Driver does not require an active internet connection to be used on a Windows computer or a laptop. You can connect Samsung devices to the computer via a USB cable, so no Wi-Fi or Bluetooth connection is required." },
      { q: "Can I view the contents on my device with the Samsung USB Driver?", a: "No. Samsung USB Driver provides only the necessary system files, allowing your Samsung devices to communicate effectively with your computer. You cannot view the contents of your phone with the Samsung USB Driver. Once you have installed the Samsung Drivers on the computer, enable USB debugging on your Samsung device and connect it to the computer via a USB cable. Through Windows Explorer, you can view the device contents." },
      { q: "Does Samsung USB Driver work with both mobile and desktop devices?", a: "The Samsung USB Driver is designed to be installed on a Windows PC or a laptop to ensure seamless communication between your Samsung device and the Windows computer. But, of course, you need a Samsung device to work with a computer." },
      { q: "Where can I find the Samsung Stock Firmware?", a: "If you are looking for the Samsung Stock Firmware (ROM) for Samsung Smartphone and Tablets, then head over to Download Samsung Firmware (ROM) page." },
  ];

  const tocLinks = [
    { title: "Why do we need Samsung USB Driver?", href: "#why-samsung-driver" },
    { title: "Download Samsung USB Driver for Windows", href: "#download-driver" },
    { title: "How to Install Samsung USB Driver on Windows?", href: "#how-to-install" },
    { title: "Samsung USB Driver – Help and Information", href: "#faq" },
    { title: "4.1. What is Samsung USB Drivers?", href: "#faq-0", isSub: true },
    { title: "4.2. For which platforms are Samsung Android USB Drivers available?", href: "#faq-1", isSub: true },
    { title: "4.3. Is Samsung USB Driver free?", href: "#faq-2", isSub: true },
    { title: "4.4. Is Samsung USB Driver safe?", href: "#faq-3", isSub: true },
    { title: "4.5. How often is the Samsung USB driver updated?", href: "#faq-4", isSub: true },
    { title: "4.6. How can I install Samsung USB Driver?", href: "#faq-5", isSub: true },
    { title: "4.7. What devices does Samsung USB Driver work with?", href: "#faq-6", isSub: true },
    { title: "4.8. Does Samsung USB Driver require an internet connection to use?", href: "#faq-7", isSub: true },
    { title: "4.9. Can I view the contents on my device with the Samsung USB Driver?", href: "#faq-8", isSub: true },
    { title: "4.10. Does Samsung USB Driver work with both mobile and desktop devices?", href: "#faq-9", isSub: true },
    { title: "4.11. Where can I find the Samsung Stock Firmware?", href: "#faq-10", isSub: true },
  ];

  return (
    <div className="font-sans bg-gray-100">
      <div className="bg-white shadow-sm border-b">
        <Header />
      </div>

      <main className="max-w-5xl mx-auto p-4 md:p-8 text-gray-800">

        <section className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Samsung USB Driver for Windows v1.9.0.0</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Download Samsung Android USB Driver, made by Samsung. Samsung USB Drivers work perfectly with all Samsung devices running Android OS. Therefore, all lines of devices, new and old, are compatible with the latest Samsung USB Driver.
          </p>
          <div className="mt-8 flex justify-center">
            <img src="https://i.imgur.com/kYmFfT1.png" alt="Samsung USB Driver Installer Wizard" className="rounded-lg shadow-lg border"/>
          </div>
        </section>
        
        <div className="my-8 bg-white shadow-md rounded-lg p-6 border">
            <div className="space-y-1 text-base">
                <div className="grid grid-cols-[120px_1fr] py-3 border-b"><span className="font-semibold text-gray-600">Name</span><span>Samsung Android USB Driver</span></div>
                <div className="grid grid-cols-[120px_1fr] py-3 border-b"><span className="font-semibold text-gray-600">Type</span><span>USB Driver for Samsung Android Phones</span></div>
                <div className="grid grid-cols-[120px_1fr] py-3 border-b"><span className="font-semibold text-gray-600">Developer</span><span>Samsung Electronics Co., Ltd.</span></div>
                <div className="grid grid-cols-[120px_1fr] py-3 border-b"><span className="font-semibold text-gray-600">File Name</span><span>Samsung-USB-Driver-v1.9.0.0.zip</span></div>
                <div className="grid grid-cols-[120px_1fr] py-3 border-b"><span className="font-semibold text-gray-600">File Size</span><span>35.46 MB</span></div>
                <div className="grid grid-cols-[120px_1fr] py-3"><span className="font-semibold text-gray-600">Supports</span><span>Microsoft Windows (32-bit and 64-bit)</span></div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-blue-600 text-white font-bold py-3 px-10 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-2 text-lg">
                    <i className="fa-solid fa-download"></i> Download Now
                </button>
                <p className="text-sm text-gray-500 mt-2">Version 1.9.0.0</p>
                <p className="text-sm text-gray-500 mt-1">Flash Tool: <a href="#" className="text-blue-600 hover:underline">Odin Download Tool</a></p>
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
                Older versions: <a href="#" className="text-blue-600 hover:underline">v1.7.61.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.59.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.58.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.50.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.48.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.46.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.43.0</a> | <a href="#" className="text-blue-600 hover:underline">v1.7.31.0</a>
            </div>
        </div>

        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} text={feature.text} />
            ))}
          </div>
        </section>

        <section className="my-12 bg-blue-800 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contents</h3>
            <ol className="list-decimal list-inside space-y-2">
                {tocLinks.map((link, i) => (
                     <li key={i} className={link.isSub ? 'ml-4' : ''}><a href={link.href} className="hover:underline">{link.title}</a></li>
                ))}
            </ol>
        </section>
        
        <section id="why-samsung-driver" className="my-12 space-y-4 bg-white p-6 md:p-8 rounded-lg border">
            <h2 className="text-2xl md:text-3xl font-bold text-center border-b pb-4">Why do we need Samsung USB Driver?</h2>
            <p className="text-gray-600 leading-relaxed pt-4">As you might know, Samsung Electronics Co., Ltd. introduced its first Samsung Android Smartphone, i.e., Samsung Galaxy GT-17500 back in April 2009. Since then, Samsung devices have gained massive popularity worldwide.</p>
            <p className="text-gray-600 leading-relaxed">The Android-based Samsung devices are compatible with the official ADB drivers. But in some cases, the ADB drivers fail to work when you try to flash or install Stock Firmware on the Samsung Devices or while writing or fixing the IMEI number on the device.</p>
            <p className="text-gray-600 leading-relaxed">And to fix this, Samsung officially released the Samsung USB Driver for Windows that allows you to connect your Samsung Smartphone or Tablet to the computer. Once you have installed the Samsung USB Driver on the computer, you can easily connect the Samsung device to the computer.</p>
            <p className="text-gray-600 leading-relaxed">It can be helpful if you are trying to transfer data from the Samsung device to the computer or from the computer to the Samsung device. You can also use it to sync the data between the computer and the Samsung device.</p>
            <p className="text-gray-600 leading-relaxed">You can also use the Samsung USB Driver to update your device’s OS. When the Samsung device is connected to the computer, a PC Suite application can easily allow you to update/upgrade the mobile OS.</p>
        </section>
        
        <section id="download-driver" className="my-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center border-b pb-4 mb-8">Download Samsung USB Driver for Windows</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                 {driverVersions.map((driver, index) => (
                    <DriverVersionCard key={index} version={driver.version} isNew={driver.isNew} />
                 ))}
            </div>
            <p className="text-center mt-6 text-gray-600">Also Check: <a href="#" className="text-blue-600 hover:underline">Archives</a></p>
        </section>

        <section id="how-to-install" className="my-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center border-b pb-4">How to Install Samsung USB Driver on Windows?</h2>
            <p className="text-center text-gray-600 pt-4">Follow the guidelines below to install the Samsung USB Driver on the Windows Computer.</p>
             {installSteps.map((step) => (
                <InstallationStep key={step.number} number={step.number} text={step.text} image={step.image} />
            ))}
        </section>

        <section id="faq" className="my-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center border-b pb-4">Samsung USB Driver - Help and Information</h2>
            {faqs.map((faq, index) => (
                <FaqSection key={index} id={`faq-${index}`} question={faq.q} answer={faq.a} />
            ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
