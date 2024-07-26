import PatientForm from "@/components/Forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className=" flex h-screen max-h-screen">
    <section className=" container my-auto remove-scrollbar">
      <div className="sub-container max-w-[496px]">
        <Image 
        src="/assets/icons/logo-full.svg"
        alt="logo"
        width={1000}
        height={1000}
        className="mb-12 h-10 w-fit"
        /> 
        <PatientForm/>
        <div className="text-14-regular flex justify-between">
          <p className="justify-items-end text-dark-600  xl:text-left">
          © 2024 QMM Hospitel
          </p>
          <Link href="/?admin=true" className="text-green-500">
          Admin
          </Link>
          </div>
      </div>
    </section>
    <Image
    alt="right Image"
    src='/assets/images/onboarding-img.png'
    width={1000}
    height={1000}
    className="max-w-[50%] side-img"
    />
   </div>
  );
}
