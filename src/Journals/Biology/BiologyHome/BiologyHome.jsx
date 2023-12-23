import IjatArticles from '../../../Articles/IjatArticles/IjatArticles';
import './BiologyHome.css'
const BiologyHome = () => {
    return (
        <div className='w-full'>
            <div className='BiologyHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>American International Journal of Biology</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2323 (Print Version) / 2334-2331 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijat</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>American International Journal of Biology</span>  is an international journal devoted to rapid publication of original research and review articles in all biology fields. The aim of this journal is to become the premier source of high quality research. Contributions are welcome from all over the world. The journal is published bimonthly. The aim of the editors is to publish timely, useful and informative results that will be of value to a general biological audience. Every article published in our journal is promoted to researchers working in the respective field. All research articles published in the journal have undergone rigorous peer review, based on initial editor screening and anonymized refereeing by at least two anonymous referees.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>American International Journal of Biology</span>  provides a forum
                    for the publication of high quality
                    accounting research manuscripts. The journal attempts to assist in the understanding of
                    the present and potential ability of accounting to aid in the recording and
                    interpretation of international economic transactions and taxation practices.
                    The journal recognizes that international accounting is influenced by a
                    variety of forces i.e. governmental, political and economical.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>American International Journal of Biology</span> is assigned a DOI®number,
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
                         <IjatArticles></IjatArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiologyHome;