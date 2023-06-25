const discordRedirect = ctx => {
    return ctx.redirect('https://discord.gg/PS3qzugR3c', 301);
};

const shopRedirect = ctx => {
    return ctx.redirect('https://loja.playnetwork.com.br', 301);
};

const liveRedirect = ctx => {
    return ctx.redirect('https://www.twitch.tv/Eduuardal_', 301);
};

const scoobydooRedirect = ctx => {
    return ctx.redirect('https://clips.twitch.tv/BusyAgreeableMushroomSeemsGood-mrFyUb9uey6n_rwI');
}

export default app => {
    app.get('/d', discordRedirect)
    app.get('/discord', discordRedirect)
    app.get('/l', shopRedirect)
    app.get('/loja', shopRedirect)
    app.get('/live', liveRedirect)
    app.get('/scooby', scoobydooRedirect)
    app.get('/scoobydoo', scoobydooRedirect)
}
