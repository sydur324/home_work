
import SmallBusinessArticle from '../../../Articles/SmallBusinessArticle/SmallBusinessArticle';
import './SmallBusinessHome.css'
const SmallBusinessHome = () => {
    return (
        <div className='w-full'>
            <div className='SmallBusinessHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Small Business and Entrepreneurship Development</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6374 (Print Version) / 2333-6382 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jsbed</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Small Business and Entrepreneurship Development</span>  is a leading international
                    scholarly journal in the field of small business and entrepreneurship studies.
                    The journal's aim is to publish original papers which contribute to the advancement
                    of the field of entrepreneurship. It publishes conceptual and empirical papers
                    mainly for the interest of scholars, consultants, academicians and public policy makers.
                </p>

                <p className='py-4'>
                    The journal attracts submissions from international academics focusing upon theoretical,
                    empirical, policy and practitioner issues within the fields of small business and entrepreneurship.
                    The journal's contents reflect its integrative approach - including primary research articles,
                    discussion of current issues, case studies, reports, book reviews and forthcoming meetings.
                    The journal is dedicated to the formulation, development, implementation and evaluation of
                    enterprise policy. Theoretical research articles and evidence-based case studies seek to
                    explore best practice, investigate strategies for growth, and to assist and inform those
                    responsible for the management of SMEs. Papers accepted for publication are double-blind
                    refereed to ensure academic integrity.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Small Business and Entrepreneurship Development</span> is assigned a DOI®number,
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
                            <SmallBusinessArticle></SmallBusinessArticle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallBusinessHome;