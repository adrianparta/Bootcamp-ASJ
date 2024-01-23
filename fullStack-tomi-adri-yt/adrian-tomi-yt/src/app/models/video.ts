export interface Video{
    id: number,
    url: string,
    category: string,
    title: string,
    description?: string,
    views: number,
    amountLike: number,
    amountDislike: number,
    valoration: number[],
    avgValoration: number,
}; 