const Language = () => {
  return (
    <div>
        <div className="mt-4">
      <h1 className="text-xl font-semibold">Languages</h1>
      <h1 className="font-semibold">English</h1>
      <p className="italic">Full Professional Proficiency</p>
      <h1 className="font-semibold">German</h1>
      <p className="italic">Limited Working Proficiency</p>
    </div>
    <div>
        <h1 className="text-xl font-semibold">Certification</h1>
        <p className="text-md italic">Complete Python Developer (01/2020 - 06/2020)</p>
        <p className="text-md italic">Frontend Web Delelopment (01/2023 - 06/2023)</p>
    </div>
    <div>
        <h1 className="text-xl font-semibold">Interest</h1>
        <button className="bg-gray-500 p-1 rounded-md m-1">Explore Technologies</button>
        <button className="bg-gray-500 p-1 rounded-md m-1">Problem Solving</button>
        <button className="bg-gray-500 p-1 rounded-md m-1">Hiking</button>
        <button className="bg-gray-500 p-1 rounded-md m-1">Volunteering</button>

        
    </div>
    </div>
  );
};

export default Language;
