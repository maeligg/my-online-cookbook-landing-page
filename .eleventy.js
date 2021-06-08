module.exports = config => {
    config.setUseGitIgnore(false);
    config.addWatchTarget("./src/_includes/css/main.css");
    
    config.addPassthroughCopy('src/img');
    config.addPassthroughCopy('src/fonts');

    config.addShortcode('year', () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data'
        },
        passthroughFileCopy: true
    }
};