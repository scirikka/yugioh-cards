export interface Card{
    id : number,
    name : string,
    type : string,
    desc : string,
    atk : number,
    def : number,
    level : number,
    race : string
    attribute : string
    card_sets : cardSet[]
    card_images : cardImage[]
    card_prices : cardPrices[]

}

export interface cardSet{
    set_name : string,
    set_code : string,
    set_rarity: string
    set_rarity_code: string,
    set_price: string
}

export interface cardImage{
    id : number,
    image_url : string,
    image_url_small : string
}


export interface cardPrices{
    cardmarket_price: string,
    tcgplayer_price : string,
    ebay_price: string,
    amazon_price: string,
    coolstuffinc_price : string
}