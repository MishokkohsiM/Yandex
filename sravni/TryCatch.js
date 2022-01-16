try {
    setTimeout(function() {
        noSuchVariable;
    }, 1000);
} catch (e) {
    console.log( "Ошибка" );
}
