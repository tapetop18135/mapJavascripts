function mapScale(lat){
    if(lat < 15){
        scaleY = 6000
    }
    else if(lat > 15 && lat < 18){
        scaleY = 9000
    }
    else if(lat > 18 && lat < 23){
        scaleY = 12000
    }
    else if(lat > 23 && lat < 27){
        scaleY = 17500
    }
    else if(lat > 27 && lat < 31){
        scaleY = 21500
    }
    else if(lat > 31 && lat < 35){
        scaleY = 29300
    }
    else if(lat >= 35 && lat < 38){
        scaleY = 35500
    }
    else if(lat >= 38 && lat < 42){
        scaleY = 48000
    }
    else if(lat >= 42 && lat < 45){
        scaleY = 51000
    }
    else if(lat >= 45 && lat < 49){
        scaleY = 64000
    }
    else if(lat >= 49 && lat < 53){
        scaleY = 85000
    }
    else if(lat >= 53 && lat < 58){
        scaleY = 114000
    }
    else if(lat >= 58 && lat < 63){
        scaleY = 153000
    }
    else if(lat >= 63 && lat < 66){
        scaleY = 205000
    }
    else if(lat >= 66 && lat < 70){
        scaleY = 215000
    }
    else if(lat >= 70 && lat < 72){
        scaleY = 280000
    }
    else if(lat >= 72 && lat < 75){
        scaleY = 315000
    }
    else if(lat >= 75 && lat < 77){
        scaleY = 405000
    }
    else if(lat >= 77 && lat < 79){
        scaleY = 495000
    }
    else if(lat >= 79 && lat < 82){
        scaleY = 665000
    }
    else if(lat >= 82 && lat < 86){
        scaleY = 905000
    }
    return scaleY
}