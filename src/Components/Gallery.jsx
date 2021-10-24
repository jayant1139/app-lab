import React from 'react'

export default function Gallery() {
    return (
        <>
             <div class="flex-container">
        <div class="card-container">
            <div class="img-container"><img src="./images/cafe.png" alt=""/></div>
            <div class="description">
                <p>
                    Ravi and Ravi joined SKS at Royal Café, Lucknow for a small treat. First in person meeting with Ravi
                    Kiran.. </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src="./images/office.webp" alt=""/></div>
            <div class="description">
                <p>

                    Sagar and Vivek - First day of work (Physical presence in Physics Department) after a long gap due
                    to shut-down of labs amid COVID-19 </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src="./images/sagarparty.webp" alt=""/></div>
            <div class="description">
                <p>

                    Sagar gave a us a party to celebrate his successful Comprehensive viva </p>
            </div>
        </div>


        <div class="card-container">
            <div class="img-container"><img src="./images/onlinemeet2.png" alt=""/></div>
            <div class="description">
                <p>

                    Online Group Meetings!! </p>
            </div>
        </div>

        <div class="card-container">
            <div class="img-container"><img src="./images/teacherday.png" alt=""/></div>
            <div class="description">
                <p>
                    Teachers' Day, 2021. Students arranged a surprise party in my office!! </p>
            </div>
        </div>
    </div>

     {/* footer starts here  */}
    <footer class="footer-part">

        <div class="flex-container-footer">
            <div class="flex-footer-items">
                <p>Research Funding</p>
            </div>
            <div class="flex-footer-items">
                <div class="funders-container">
                    <img src="./images/iitrlogopng.png" alt=""/>
                    <img src="./images/inspire.png" alt=""/>
                    <img src="./images/nserb.png" alt=""/>
                    <img src="./images/stars.png" alt=""/>
                    <img src="./images/Dst.png" alt=""/>
                </div>
            </div>
            <div class="flex-footer-items">
                <h6>We thank you for supporting our research !!</h6>
            </div>
        </div>
    </footer>
        </>
    )
}

