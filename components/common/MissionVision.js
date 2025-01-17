import React from 'react'

const MissionVision = () => {
  return (
    <div className="w-full">
        <div className="border border-[var(--border-color)] m-5 p-2">
          <h2 className="font-epilogue text-[clamp(20px,30px,60px)]">Mission</h2>
          <p className="font-inter text-[var(--primary-light)]">
            Promote knowledge sharing, skill development, and ethical values within the Department
            of Computer Science & Engineering at NIT Calicut through interactions with professionals
            and institutions in the computing field.
          </p>
        </div>

        <div className="m-5 flex gap-5 max-w-full">
          <div className="w-full p-2 border border-[var(--border-color)]">
            <h2 className="font-epilogue text-[clamp(20px,30px,60px)]">Vision</h2>
            <p className="text-[var(--primary-light)]">Achieving Excellence together</p>
          </div>
          <div className="w-full p-4 border border-[var(--border-color)] flex flex-col justify-between">

            <p className="font-ibmplexmono font-medium uppercase bg-[var(--image-bg)] line-clamp-1 w-max text-sm ">Established</p>
            <h2 className="font-epilogue text-[36px] font-normal ">2002</h2>
          </div>
        </div>
      </div>
  )
}

export default MissionVision
