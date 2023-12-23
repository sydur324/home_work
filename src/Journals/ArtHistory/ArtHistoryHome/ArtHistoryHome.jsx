import ArtHistoryArticle from '../../../Articles/ArtHistoryArticle/ArtHistoryArticle';
import './ArtHistoryHome.css'
const ArtHistoryHome = () => {
    return (
        <div className='w-full'>
            <div className='ArtHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>International Journal of Art and Art History</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2321 (Print Version) / 2374-233X (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijaah</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Art and Art History</span>  is a
                    scholarly journal which supports and promotes the study of the art and practice of art historical
                    writing. The journal is committed to studying art historical scholarship, in its institutional and
                    conceptual foundations, from the past to the present day in all areas and all periods.
                    This journal ignores the disciplinary boundaries imposed by the Anglophone expression
                    'art history' and allow and encourage the full range of enquiry that encompassed the
                    visual arts in its broadest sense as well as topics now falling within archaeology,
                    anthropology, ethnography and other specialist disciplines and approaches. It welcomes
                    contributions from young and established scholars and is aimed at building an expanded
                    audience for what has hitherto been a much specialized topic of investigation. The journal
                    also accepts notes, reviews, letters, bibliographical surveys and translations in addition
                    to articles.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>International Journal of Art and Art History</span>  is the first international
                    contemporary journal dedicated specifically to the study of art and art historiography and its ambition
                    is to make it the point of first call for scholars and students interested in that area. The journal
                    follows double-blind peer review process.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Art and Art History</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online,
                        Google Scholar, Education.edu, Informatics, Universe Digital Library,
                        Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal Seek, DRJI,
                        ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases,
                        Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                        <ArtHistoryArticle></ArtHistoryArticle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtHistoryHome;