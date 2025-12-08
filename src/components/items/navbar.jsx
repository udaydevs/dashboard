import { Button } from "../ui/button"

export default function Navbar() {
    return (
        <div className="flex justify-center w-full h-19 ">
            <div className="absolute top-0 w-5/6 flex justify-between h-19 items-center">
                <div className="flex items-center">
                    <div className="w-fit p-6  pb-7 flex items-center">
                        <div className="mx-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m590-488 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM480-480Zm320 320H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm-720 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Z" /></svg>
                        </div>
                        <div className="text-xl  font-black ">
                            Sensei
                        </div>
                    </div>
                    <div className="h-fit" >
                        <Button className="text-sm shadow-none  font-light border-none  bg-none" size="sm" onClick={() => { router.push('/chat') }} variant="outline">
                            Features
                        </Button>
                        <Button className="text-sm py-0 shadow-none font-light border-none  bg-none" size="sm" onClick={() => { router.push('/chat') }} variant="outline">
                            Solutions
                        </Button>
                        <Button className="text-sm  shadow-none font-light border-none  bg-none" size="sm" onClick={() => { router.push('/chat') }} variant="outline">
                            Enterprise
                        </Button>
                        <Button className="text-sm  shadow-none font-light border-none  bg-none" size="sm" onClick={() => { router.push('/chat') }} variant="outline">
                            Case Studies
                        </Button>
                        <Button className="text-sm  shadow-none font-light border-none  bg-none" size="sm" onClick={() => { router.push('/chat') }} variant="outline">
                            Resources
                        </Button>
                    </div>

                </div>
                <div>
                    <Button className="text-sm shadow-none  font-light border-none  bg-none" size="sm" onClick={() => { router.push('/chat') }} variant="outline">
                        Resources
                    </Button>
                    <Button className="bg-black mr-3 p-5 font-medium text-sm text-white rounded-3xl" size="sm" variant="outline">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}