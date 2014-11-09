/**
 * Created by Mark Howard on 11/9/2014.
 */
function getSample() {
    var quotes = _.sample([
        "You only die once",
        "I don’t want to earn my living; I want to live. - Oscar Wilde",
        "Hello World",
        "What screws us up the most in life is the picture in our head of how it is supposed to be. -Anonymous",
        "Life shrinks or expands in proportion to one’s courage. - Anais Nin",
        "The trouble is you think you have time. - Buddha",
        "Life is a shipwreck but we must not forget to sing in the lifeboats. -Voltaire",
        "Whatever you are, be a good one. -Abraham Lincoln",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. -Buddha",
        "Life is like a candle… Either it slowly melts away or a harsh breath of wind blows it out of existence. -Brittany Ann Smith",
        "Be the change you wish to see in the world. -Unkown",
        "Life is ten percent what happens to you and ninety percent how you respond to it. -Lou Holtz",
        "What a wonderful life I’ve had! I only wish I’d realized it sooner. -Colette"
    ]);

    document.getElementById("quote").innerHTML = quotes;
}