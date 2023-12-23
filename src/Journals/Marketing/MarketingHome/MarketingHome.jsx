
import MarketingArticles from '../../../Articles/MarketingArticles/MarketingArticles';
import './MarketingHome.css'
const MarketingHome = () => {
    return (
        <div className='w-full'>
            <div className='MarketingHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Marketing Management</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6080 (Print Version) / 2333-6099 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jmm</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Marketing Management</span>  is a double blind peer
                    reviewed international academic journal that publishes scientific research papers
                    on the contemporary practices of marketing. The journal concentrates on the
                    subject of marketing research, from its philosophy, concepts, and theories to
                    its methods, techniques, and applications. The journal is published mainly for
                    technically oriented research analysts, educators, and statisticians.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>Journal of Marketing Management</span>  actively encourages global
                    contributions from scholars across the broad domain of marketing. It welcomes
                    novel and ground-breaking contributions from a wide range of research traditions
                    within marketing, particularly encouraging innovative ideas in conceptual
                    developments and research methodologies. The journal is completely open access
                    which has opened the doors for the millions of international readers and
                    academicians to keep in touch with the latest research findings in the
                    field of economics and development studies.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Marketing Management</span> is assigned a DOI®number,
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
                      <MarketingArticles></MarketingArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingHome;