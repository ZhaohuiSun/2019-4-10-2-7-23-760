module.exports = function main(distance,parkTime) {
    var summary=6;
    if(distance<2)
    {
        summary=summary+0.25*parkTime;
    }
    else if(distance<8)
    {
        summary=summary+0.25*parkTime+0.8*(distance-2);
    }
    else
    {
        summary=summary+4.8+(distance-8)*1.2+0.25*parkTime;
    }
    return Math.round(summary);
};
