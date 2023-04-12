const discordRedirect = ctx => {
    return ctx.redirect('https://discord.gg/PS3qzugR3c', 301);
};

export default app => {
    app.get('/d', discordRedirect)
    app.get('/discord', discordRedirect)
}