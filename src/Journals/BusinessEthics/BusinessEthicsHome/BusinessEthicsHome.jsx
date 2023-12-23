
import BusinessEthicsArticles from '../../../Articles/BusinessEthicsArticles/BusinessEthicsArticles';
import './BusinessEthicsHome.css'
const BusinessEthicsHome = () => {
    return (
        <div className='w-full'>
            <div className='BusinessEthicsHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Business Law and Ethics</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4862 (Print Version) / 2372-4870 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jble</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Business Law and Ethics</span>  is an international
                    scholarly journal that publishes original materials from a wide variety of methodological
                    and disciplinary perspectives concerning legal and ethical issues related to business that
                    bring something new or unique to the discourse in their field. The journal has aimed to improve
                    the human condition by providing a public forum for discussion and debate about legal and ethical
                    issues related to business. Papers accepted for publication are double-blind refereed to ensure
                    academic integrity.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>Journal of Business Law and Ethics</span>  contents reflect its
                    integrative approach - including primary research articles, discussion of current issues, case studies,
                    reports, book reviews and forthcoming meetings. The blind peer review and editorial policies are largely
                    contributed by the 'international business forum' of American Association of International Researchers.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Business Law and Ethics</span> is assigned a DOI®number,
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
                        <BusinessEthicsArticles></BusinessEthicsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessEthicsHome;