module.exports = function main(inputs) {
    var summary=6;
    if(inputs.distance<2)
    {
        summary=summary+0.25*inputs.parkTime;
    }
    else if(inputs.distance<8)
    {
        summary=summary+0.25*inputs.parkTime+0.8*(inputs.distance-2);
    }
    else
    {
        summary=summary+4.8+(inputs.distance-8)*1.2+0.25*inputs.parkTime;
    }
    return Math.round(summary);
};
