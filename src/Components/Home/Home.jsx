import "./Home.css"
import InpIcon from "../../../public/searchicon.png"
import BgImg from "../../../public/backgroundimage.png"
import DreamJob from "../../../public/banner.jpg"
import jobcardlogo from "../../../public/jobcardlogo.png"
// import SubFooter from "../Footer/Footer"
import { Footer, SubFooter } from "../../Components/Footer/Footer"
import icon from '../../../public/ArtIcon-abc0c65a.svg'
import { useCallback, useEffect, useState } from "react"
import ContrastIcon from '@mui/icons-material/Contrast';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PolicyIcon from '@mui/icons-material/Policy';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import UploadFileIcon from '@mui/icons-material/UploadFile';
function Home() {

    const [jobApi, setJobApi] = useState([])

    useEffect(() => {
        jobApiCall()
    }, [])

    const jobApiCall = async () => {
        //     fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category`)
        //         .then((resp) => (resp.json()))
        //         .then((resp) => {
        //             (setJobApi(resp.data))
        //             console.log(resp, "data ara hai api se resp.data")
        //             console.log(jobApi, "APi ari hai")
        //         })
        const response = await fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category`)
        const data = await response.json()
        setJobApi(data.data)
        console.log(jobApi, '===>>>> data agaya')
    }

    return (
        <div>
            <BgHome />
            <Gethire />
            <Banner />
            <CareerOpt />
            <OpenJobHeading />
            <div className="opened-job  ">
                {
                    jobApi.slice(0, 6).map((jd, index) => (<OpeningJobs jd={jd} key={index} />))
                }
            </div>

            <SubFooter />
            <Footer />
        </div>
    )
}


export default Home

function BgHome() {
    return (
        <div className="bg-home">
            <h1 className="w-full  h1">
                <b> Dig. Apply
                    <br />
                    Prepare Your Future
                </b>
            </h1>
            <div className="P-main">
                <p className="Para">
                    Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.
                </p>
            </div>
            <div className="inp-bar">
                <input type="text" placeholder="Search by Role or Keyword" />
                <img src={InpIcon} alt="" />
            </div>
            <div className="text-center job-btn">
                <button className="">Find jobs</button>
            </div>
            <div class="popular-searches">
                <h6>Popular Searches</h6>
                <div class="button-group">
                    <button type="button" aria-label="Software">Software</button>
                    <button type="button" aria-label="Developer">Developer</button>
                    <button type="button" aria-label="Backend">Backend</button>
                    <button type="button" aria-label="React">React</button>
                    <button type="button" aria-label="Node">Node</button>
                    <button type="button" aria-label="React Native">React Native</button>
                    <button type="button" aria-label="Flutter">Flutter</button>
                    <button type="button" aria-label="UI/UX">UI/UX</button>
                    <button type="button" aria-label="Designer">Designer</button>
                    <button type="button" aria-label="Web">Web</button>
                    <button type="button" aria-label="SEO">SEO</button>
                    <button type="button" aria-label="Marketing">Marketing</button>
                    <button type="button" aria-label="Writer">Writer</button>
                </div>
            </div>
            <div className="bgImg">
                <img src={BgImg} className="" alt="" />
            </div>
        </div>
    )
}

function Gethire() {
    return (
        <div className="Get-hired text-center mt-40 mb-48">
            <h3>
                Get Hired In 4
                <span className="ms-2">
                    Quick Easy Steps (Coming Soon)
                </span>
            </h3>
            <p className="font-thin text-2xl mb-10 mt-1">
                The quickest and the most effective way to get hired by the top firm.
            </p>
            <div className="card-main">
                <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
                    <div class="step-box dark:bg-[#292930] p-4 bg-white shadow-lg rounded-lg m-auto">
                        <div class="icon mb-4">
                            <PermIdentityIcon />
                        </div>
                        <div class="title mb-2  ">
                            <p class="text-lg font-semibold text-gray-900 text">Create an Account</p>
                        </div>
                        <div class=" dark:text-white ">
                            Join our vibrant community. Create your account and unlock boundless opportunities.
                        </div>
                    </div>
                    <div class="step-box dark:bg-[#292930] p-4 bg-white shadow-lg rounded-lg m-auto">
                        <div class="icon mb-4">
                            < PolicyIcon />
                        </div>
                        <div class="title mb-2">
                            <p class="text-lg font-semibold text-gray-900 text">Search a Job</p>
                        </div>
                        <div class=" dark:text-white">
                            Discover your ideal job. Our intuitive search feature makes job hunting effortless.
                        </div>
                    </div>
                    <div class="step-box dark:bg-[#292930] p-4 bg-white shadow-lg rounded-lg m-auto">
                        <div class="icon mb-4">
                            <UploadFileIcon />
                        </div>
                        <div class="title mb-2">
                            <p class="text-lg font-semibold text-gray-900 text">Upload CV/Resume</p>
                        </div>
                        <div class=" dark:text-white">
                            Showcase your expertise. Upload your CV or resume and stand out to employers.
                        </div>
                    </div>
                    <div class="step-box dark:bg-[#292930] p-4 bg-white shadow-lg rounded-lg m-auto">
                        <div class="icon mb-4">
                            < HomeWorkIcon />
                        </div>
                        <div class="title mb-2">
                            <p class="text-lg font-semibold text-gray-900 text">Get a Job</p>
                        </div>
                        <div class=" dark:text-white">
                            Achieve your career goals. Apply for jobs and embark on your next adventure for your better.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Banner() {
    return (
        <div className="flex w-full flex-col items-center justify-center text-center py-8 main-banner mt-40 mb-48">
            <h3 className=" text-gray-800 dark:text-white dreamjob-heading-h3 ">
                Find Your Dream Job{" "}
                <span className="dreamjob-heading-span">Super Fast Ever.</span>
            </h3>
            <p className="font-thin text-2xl dreamjob-heading-para">
                We are here to help job seekers connect with organizers and companies.
                We provide the best opportunities to professional people.
            </p>
            <div className="banner-jpg">
                <img
                    src={DreamJob} alt="Career Banner" className=""
                />
            </div>
        </div>
    )
}
function CareerOpt() {
    const [apiData, setapiData] = useState([])


    const getApi = () => {
        fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
            .then((resp) => resp.json())

            .then((resp) => {
                setapiData(resp.data)

            })
            .catch("error")
    }

    useEffect(() => {
        getApi()
    }, [])
    console.log(apiData, "==> apiData")

    return (
        <>
            <div className="">
                <h1 className="text-center dreamjob-heading-h3"><span className="text me-2">Countless Career Options</span>Are Waiting For You To Explore</h1>
                <div className='P-card mt-12  '>
                    {
                        apiData.slice(0, 8).map((resp) =>
                            <Cards resp={resp} />
                        )
                    }
                </div>

            </div>
        </>
    )
}

const Cards = ({ resp }) => {

    return (
        <div className='main-card'>
            <img src={icon} alt="" />
            <h5 className="w-full h-12">{resp.name}</h5>
            <p><b>{resp.postCounts} jobs</b></p>
        </div>
    )
}

function OpenJobHeading() {
    return (
        <div className="text-center mt-32 mb-11  ">
            <h1 className="dreamjob-heading-h3"><span className="text "> Latest And Top</span> Job Openings</h1>
        </div>
    )
}

function OpeningJobs({ jd }) {
    return (

        <div class="job-box  w-full">
            <div className="">
                <div class="card-header">
                    <div className="">
                        <p className=" mt-1">{jd.companyName ? jd.companyName : 'Anonymous'}</p>
                        <p class="card-title mt-1">{jd.designation}</p>
                        <p class="card-salary mt-1">No Salary Mentioned</p>
                    </div>
                    <img src={jobcardlogo} alt="Random Icon" />
                </div>

                <div class="card-location">
                    {jd.city} { } {jd.country}
                </div>

                <div class="card-footer">
                    <p>a day ago</p>
                    <p>{jd.views} views</p>
                </div>
            </div>
        </div>

    )
}


