const AgeRatingSpan = ({ ageRatingId, ageRatingName }: any) => {
    let ageRatingColor;
    switch (ageRatingId) {
        case 1:
            ageRatingColor = '#A8F5A8';
            break;
        case 2:
            ageRatingColor = '#A5DAF9';
            break;
        case 3:
            ageRatingColor = '#FFFCA1';
            break;
        case 4:
            ageRatingColor = '#FFC291';
            break;
        case 5:
            ageRatingColor = '#FFA4A4';
            break;
        default:
            ageRatingColor = '#BEBEBE';

    }

    return (

        <div className={`
                text-neutral-800 text-xs font-bold
                    px-2 py-1 rounded-md
                bg-esrb-${ageRatingId}
            `}
            style={{ backgroundColor: ageRatingColor }}
        >
            <span>{ageRatingName}</span>
        </div>
    )
}

export default AgeRatingSpan;