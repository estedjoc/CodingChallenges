const toJadenCase = (str) => {
    let spacedString  = str.split(' ');
    let capitalizedFirstLetter = spacedString.map( word => word[0].toUpperCase());

    return capitalizedFirstLetter;
}

//not completed, still really confuses me because of question prompt and strcuture, uses string.prototype.toJadenCase really weird IMO setup but oh well will try another

