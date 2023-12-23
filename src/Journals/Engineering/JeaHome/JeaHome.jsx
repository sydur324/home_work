
import './JeaHome.css'
const JeaHome = () => {
    return (
        <div className='w-full'>
            <div className='JeaHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Engineering and Architecture</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2986 (Print Version) / 2334-2994 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jea</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D] '>Journal of Engineering and Architecture</span>  is an international peer-reviewed journal
                    published by The Brooklyn Research and Publishing Institute. The journal is not limited to a specific
                    aspect of engineering and architecture but is instead devoted to a wide range of subfields in the engineering
                    sciences and architecture. Articles of interdisciplinary nature are particularly welcome. The journal strives
                    to maintain high quality of publications. There will be a commitment to expediting the time taken for the
                    publication of the papers. The editorial board reserves the right to reject papers without sending them out
                    for review. The journal also publishes innovative contributions on every aspect of architectural endeavor.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Accounting and Taxation</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online, Google Scholar, Education.edu,
                        Informatics, Universe Digital Library, Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal
                        Seek, DRJI, ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases, Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JeaHome;