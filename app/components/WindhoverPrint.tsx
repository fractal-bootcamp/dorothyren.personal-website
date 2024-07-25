import { MouseEvent, useState } from "react";

export function WindhoverPrint() {
    const poem: Poem = [
        "The Windhover",
        "by Gerard Manley Hopkins",
        "To Christ our Lord",
        "I caught this morning morning's minion, king-",
        "dom of daylight's dauphin, dapple-dawn-drawn Falcon, in his riding",
        "Of the rolling level underneath him steady air, and striding",
        "High there, how he rung upon the rein of a wimpling wing",
        "In his ecstasy! then off, off forth on swing,",
        "As a skate's heel sweeps smooth on a bow-bend: the hurl and gliding",
        "Rebuffed the big wind. My heart in hiding",
        "Stirred for a bird, -- the achieve of, the mastery of the thing!",
        "Brute beauty and valour and act, oh, air, pride, plume, here",
        "Buckle! AND the fire that breaks from thee then, a billion",
        "Times told lovelier, more dangerous, O my chevalier!",
        "No wonder of it: shéer plód makes plough down sillion",
        "Shine, and blue-bleak embers, ah my dear,",
        "Fall, gall themselves, and gash gold-vermilion.",
    ];

    type Poem = string[];

    const [currentLine, setCurrentLine] = useState(0);

    // const poemLines = poem.map(line => <p>{line.content}</p>)

    function onClick() {
        setCurrentLine(currentLine + 1)
    }

    function onReset(e: MouseEvent<HTMLButtonElement>) {
      setCurrentLine(0);
      // Events start at the child and, if not stopped, will bubble up to the parent.  -- ssebexen
      e.stopPropagation();
    }

    function getLinesToPrint() {
        const linesToPrint = poem.filter((_line, index) => index <= currentLine)
        return linesToPrint;
    }

    const linesToPrint = getLinesToPrint();

    return (
        <>
            <div className="w-screen h-screen p-8" onClick={onClick}>
                <div className="flex flex-col items-start">
                    <p className="p-4 font-mono italic text-sm">Click for the next line of the poem</p>
                    {linesToPrint.map((line, i) => <p key={i} className="p-2 font-mono">{line}</p>)}
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <button className="border border-gray-200 hover:bg-gray-400 rounded-md h-8 w-16 font-mono bg-gray-200" onClick={onReset}>
                        reset
                    </button>
                </div>
            </div>
        </>
    )

}

export default WindhoverPrint
