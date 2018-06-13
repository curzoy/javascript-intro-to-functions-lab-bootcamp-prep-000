
function shout (string) {
  
  return
  string.toUpperCase()

    expect(shout('hello')).toEqual('HELLO')
  
}

function whisper (string){
 return  

string.toLowerCase()
    expect(whisper('HELLO')).toEqual('hello')
  
}

function logShout(string){
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello').toUpperCase()

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  
}

function logWhisper(string){
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO').toLowerCase()

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()

}

function sayHiToGrandma(string) {
  
if(expect(sayHiToGrandma('hello')){
  "I can't hear you!"
  }

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
