import { keyboardRow } from "./keyboardRowLC500";

it('["Dad"] is returned using ["Dad"]', () => {
    const words = ["Dad"];
    const result = keyboardRow(words);
    expect(result).toEqual(["Dad"])
})

it('[] is returned using ["omk"]', () => {
    const words = ["omk"];
    const result = keyboardRow(words);
    expect(result).toEqual([])
})

it('["adsdf", "sfd"] is returned using ["adsdf", "sfd"]', () => {
    const words = ["adsdf", "sfd"];
    const result = keyboardRow(words);
    expect(result).toEqual(["adsdf", "sfd"])
})

it('["were"] is returned using ["Were", "open"]', () => {
    const words = ["Were", "open"];
    const result = keyboardRow(words);
    expect(result).toEqual(["Were"])
})

it('["zxc"] is returned using ["zxc", "zdfden"]', () => {
    const words = ["zxc", "zdfden"];
    const result = keyboardRow(words);
    expect(result).toEqual(["zxc"])
})

it('["Alaska","Dad"] is returned using ["Hello","Alaska","Dad","Peace"]', () => {
    const words = ["Hello", "Alaska", "Dad", "Peace"];
    const result = keyboardRow(words);
    expect(result).toEqual(["Alaska", "Dad"])
})

it('["Lad"] is returned using ["The", "Lad", "is", "Great"]', () => {
    const words = ["The", "Lad", "is", "Great"];
    const result = keyboardRow(words);
    expect(result).toEqual(["Lad"])
})

