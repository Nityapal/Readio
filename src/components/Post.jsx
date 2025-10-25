import React,{useState} from 'react'
import Postcard from './Postcard'
import Navbar from './Navbar'

const Post = () => {

    const [popup, setPopup] = useState(false)
    //const [posts, setPosts] = useState([])
    const [posts, setPosts] = useState([
    {
        type: "Book",
        title: "The Midnight Library",
        oneLiner: "A journey between life and regrets.",
        rating: 5,
        fullContent: "A heartwarming story about choices, regrets, and the infinite possibilities life holds. It makes you rethink your own ‘what ifs’.",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUVGBcWGBYVGBYYGBcYGBgXGBkVFRUYHyggGhslHRcYITEhJSorLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lICUuLS0vLSstLS0tLS0vLy0tLS0rLS0wLS0wLS0tLS0tLS8tLS0tLSstLS0tLS0tLS0rLf/AABEIAKwBJgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFAwQGBwj/xABEEAACAQIEAwUEBwUFCAMAAAABAhEAAwQSITFBUWEFBhMicYGRobEjMlJywdHwBxRCc+EzNZKy8SQlQ1NiY4KiFTSD/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQMCBAQGAwAAAAAAAAABAhEDBBIhMUETIlFhBZGhwTJxgdHh8BQj8f/aAAwDAQACEQMRAD8A83rJZUMwBYIDuxDEDTchQSduAO9QjTf2Uq2oxEDIqZXQGQZnTWRHPSNek0XLhYlmMljJPEk7mkff1/HWqAA24TxMx6+lDDXeeo2PUTQWJiTtt09KGb9aDb9b0AUGnQzSZgDoNKAleyScmYifKWygxrOZRInbY8DvOmMVJyJMCASYEzA4CeNCjjpAIHvk7bxof0aASKSYAJJ4ASfcKVMMQZGh6fnSoB03YGIEQADvqdfMZO/ppptSFAHDf9cBQgxKkHUHQg7HoQfxqViwznKiljyHD1OwHrVtgexidbvKAsnMNQdwYG0RrudAYIubNlVGVQAOQ/Hmeprsw6Kc+ZcI87U/EseLiPL+hyuLwFy2AXGh0BBBExMabH8jEitfhw14ayPwq77fxRnwoEQrE8SYMeg1qkYRwI2OvIiQfQgg+2ufPGMJtROvTZJ5MalNcsP1/pW52TgzdcrmKgKSSOR0iOMk7cprTIrp+7OHi0X+2f8A1XQfEt7qunhvmkzDW5/BwuS69ikxnZ9yycxAK7ZgJXXSCD9U68eO201p16Aqfl7Oo41U9od3UfW1CN9nXIfxX2SOgrdm01cwOPS/E1NVlVe/Y5jxJMsA22mwIAAA8scANd/bSkZYg5p+tOkRtljedZn2VlxWFe02W4pU8ORHMHaOorEVgKZBmdJ2gx5hwrkPVTTVonZtG44VAATMAsFGiyfM5gbHc9BwFY0QnYVGpIesVUQ3cR2fcW2jlCFbNBjQ5YmD0ke+tErWxdxDFVEnSeNa5NZz23wRX3JZCTprpJ06SfdqPZUKCKKwMgqTLEdRO4PvjY6bUs3Hf9dKDQCooqeTy5pG8RPm2mY3jrUIQp0qZFChRRRQpK7l0y5vqjNmj62s5Y/h2313qFSuPMaKIAHlAExxaN2PE8aiKgJK5EwdwQfQ7io0GnPwqgVStOVIYGCpBB5EGQffUancy6Zcw0E5iD5o8xEAQs7DfqaAjROkfr3+2imrkGQYOu3pB+BoBi2xUtByggE8AWkgH1yt7jUAakTvoCeZmRzj1035Co0AVktWswY5lGUTrPm1AyrA31n2H2wBoY8edAFXvd/CCPFO5kL0A0LDqTI9h51RVfd3brMHUkkLlCjgJLk+8106SvFVnF8Qclp5OLouAKFcZss+YCSOIEgSfftWriS58RfqILYPiGQAxZJ8/wB3NoOY5ingcguZVEnwbZz6iVGQKAnCd9da9R5/Oor1PB/xKxOcn2vj7lZ3lwxDC5HlIAJ5ETp7oqkArvr2FW4pVxmU8OR5g8D1rn8T3ZuKQbZzrOxgOB6bH2e6vO1enlvclyj1NBroPGoSdNfU1e1+x3tP5FdkOVQxIaXIAIJUCAXkAETEbmuuw+FCKqDUIAs84ET7TJ9tTv4d8xe2+UndWlrbeo3UxpmXkJBqNnFjMEuA2nOgViCrn/tXPqv6aN0rLGo4mzl1OWepgkua61+xg7VC+HlZ2QOypmSJlp0IO68wIPxrL2bbYWwrsrFCUzKZBCmBPJh9Ug/Z61nxlpyoCEAhgSGAIKiZUg6dddiBxArF2cgm9CMk3nJzEnMTl86yJysIPHc6xtrnPzWYRS8Cip74WJto8fVYj2MJ+a/GuVuLBIkNBIlZgxpIkAx6gV3/AG5h8+HujiFLD1SH/CPbXn8SY/XvNc83bs9X4fK8VegqVSIjT9e8UjWJ3BPCiBHWiTt7YpVQSQCdSQOJAk+4kfOoimwgx8tfiKVASzSZOvONKQ6/o02I0gRp7zzoYAcQdBtPEAxqBqDp7NJ3qALdwqQwiRqJAI05hpB9ulRAqSFlKsJB+sp1Gx3U9CDrzFKgCgiiigHGkz7OW369lFKihRu08ANANOgAn1MSepNIUqKiAwNtffw92tI0TRVACmad18xJgCTMKIA6KOAqIoB1kt32VWUMQrwGA2YKcyyOMHWowImdZ2jhG87dI6VGgClUmEGNPUbeyo0AwPhSpmPz/p8KdpMzKvMgadTGlANXieog7aiQd+GoG1db3H7EuXxe8EZyPMAYUsqGJAmJlxpPA61dn9mmIwmOw7ALicN49vM0eZULCRdtnQjmRI5gCvT+xe6uHwl43LAKKUKeENVEsGlZ1Gs6a76RWWLL4ct3fsaNRh8WGzs+v5HF93O6FvGWMQl8PbuKwthho6LltuVKHSCyg6jqN6qe1O7WKwl2GUfu4RVR1iC4IADA+bMFB30g7nWvZwo351z3fvDu+GhFLQ6sYEmADJis8eok8u592aM+litM4rmkeZqlZFSsGKxOQNlAJVQ5LtktgF1Xz3OBjM0b+TYyK3QK7Z5kfPrBKMVJ9yAQnQb8PX4Vq2r9u8gDBWR9B/FbczAAJAhp0ysA07Zt6sbS6j1Fc/2LbU/uzWnKpGIm27DOwaJAgAOqtHI/VMaGOPJkOzBjTi2+38lx2Z2Tfe6tuwRcU7pdYzbXSWW7BOUaeVgeQOorse1O6CWrDOtxi6KWMwFIG4A3HvNZ+4JtjxB/xG122RYA16lj7q2v2gYA3sMAA5y3FclCyssK3nBXkSOY6VzOZ6OLBCWHfNWzgVA47cfSvMcXhzbdkO6Eqf8AxJH4V6Jnu2h55vJ9tF+kUc7lsaP6p/hrmu8PZj3WOIsZbtptfo4LAgeaQBJ114kTrEVjGfJjo14cmm+Gc6F0JkaRpxM8h0qNMikK2npBROnu1jXjx/W1BqTAQIJnWRGg2iDOs68BEcZ0AhRFFMRB3nhy6yZ0oCV18zEwFkk5VnKJ4KCSY9tRFKs+DRC4FxmVP4ioDMB0UkA++qiGGigdfhWawikNmaCBKgCcxkaEyMogkzrsBGsglYsw0xGvw/r7Jp+IYyycs5o4TETHONJoeNInbWY36dNqhQLnLl0ic2wmYjfeOlOosxJkmSeJ1PvooCNFMdakqSCZGkbkAmTGg3PsqFI/P/Th76YHGOnw+dKiqAIp5jESYkkCTEmATHMwBPQcq2sPgjdk2wQqIGuu5ARNYktyJIAXViZgGliMA6It2Ve2xKi4hJXOACbbAgMrQQYYCQZEisdyurFGrRRRWQCgek+/36VLcEkjSABzmZiBEDr9oRMGHdtlWKmJBIOUhhpyZZBHUUIY4qdj6y/eX5ikoniBvvPDhpWTDN5gIGrJrGog8DwqFPq7E4hbal3YKqiSx0AHMmh4dTB0YbjqNwaq++BH7liJMDw21Ow03Ncp3L7Su/vOHsyVtNg1fw2nPmDMJZIhNCvEGdIMSIoXHdZrlkantrijoLNi9gsHdBuG6yT4bQScpyxmBnYljx0re7sdpticLbvMFDNmDZGDLKuyGCJ4rtJjat+7iUUqrMAXJCgmMxAkgeytHtHsgPYNmyRZ82cZBlGYsXJhY3Ykk8zNYt7upVHYvL2XQ4D9rXZgLeXLbV7LZ3Y5bYYX7DBnP1Q2VW2GZojWBWhYIKqRsQCCQRIjQwdRI11516R2l3dtYlLRxChrtoeVxrlcgZmUHQ6jiPdXEY/Bm1de2TmymJ2mQDMe2rvpHna6D4dcGmBWoOy0D23UZfC8SFUKF+lEMSo21g+WOWXjW9ebKpby+USczZRA1JLQY0npzjesnZw8Z1trKu0eVoDAHXPAJDLGuZCymNCa0SyPsc2KE64Ok7p2Vs2ruLuaIqt/gTzO0Df6vwNdD2J2n+8oXyZQHZBrM5TBO28yCNdQdTW1awiLbFrKCgXJB1BEQQRxmseDxNolrdsr9HEhRoJmAI04HSslxSPaxY/DionPd4u6+ablhfNu1sQAeqToG6SAenHhP3NPE8VQyvrmjMmfcZb1sxLA/aGYEeyvVOzO2Fv3LiKjAW8vnMZWzFhA6jLPoymsfbnYCYgSPLcGzc+jDiPiK1ThuVwNOTTqS3Q6nzl3m/8At3vvD/KtVytGx3BB04e35irTvdaKY3EK263MpjaQqjT3VU11w/CjfFVFIBRTJ/X9KiGB4j37etZGQ6KKzWMO7DMtt2A3IRmURwYgR76jddQYYqdmyXYKo1OgkgD3mAPbUd+vQdeQpRVIANSt78NdNZgTpOnLf2cdqjTPDThrrOvPp6UAjRTAHt+EQePPbh7qVChRRRQDViCCCQQQQRoQRqCDwNKnQwihANKpLlkSco0lomBOpCjeBrFb2PwCWr9+y10AWTdVWKn6RrZICAD6paNyYFYuSTopn7MvocNfsO62zde06OZjPazeS5lBIQhzDQQGXXej96WzhmsB1uPcvW7py+ZEW2rAA5hDMxYyIIhRJ1ga9zCW1wi38/na+bRUiAoVM+jTDTmXhpHrOjB5H/X/AE+Fa1CLbfvf6otsv8VibTYZrc2ZXD4QpCKH8VWXxpuBcxfJnDSY1HHWtfFYpP3VEt+ABADqUbx/FDsS4eMuUrlAM7eWNKqSeu2kjrMe+gLoT7tN9efDj7qLEl37jcQp0U2HWdJ9OlbjEUfn7OdZMOfMv3l+f691QFZbFsyjQcpcLPCQQSPcRQp9U9oYNb1t7TzldSpykqYPFWGoPWuR7F7m3MLj7V5bmeymF/dpY/SSHL5n0gzO448K6XvFintYa7cQwyLmBgHYjSDz29taXYveRLzJZaBea0t4qNRBJExuBI41rSe2+xi5R3bX1ND9oOGFxMOGzQLwJUEgNAP1o3HGNq3u6uPa6cQC+dUvOqmQYh2BWRyIiDttW3272KmKVFZnXI6XAUMaowYBuamNRWDu72U2Ha+CqhXuF1yQAcxZiSB/FJ1J361bW2jW4yWXd2/gt/GXMVkZgASOIB2MVy3eHu/cZ2u2/Pm1K7EQANOe3+tS7bJGKZgSCLDkEcDkubVe9i3mewjMZYgydpgkcPStMmn5Q0stwkuh521gGVYAgyCGEgjYgg+6ul7mdj27Sm6EVEXMttQAFWTLuBwkyPYarBhC90qu7Ow/9jr7ta7PE9nBrPgqcogLI10Eb85/GtGnm5KXszTgwuMt3oafebEThHZCWByQUIkguoMaiREz0nfaq3uLB8UjbyCYI1GeRrsRI0OokV0C9nW/CFmCUEaTvBnWOutbFq0qgBQABsAIA9lbXjuSm+qOrZc9zI2MOiCEUKJJgCNTuay0UVtNh8zd/T/vLF/zm5VRMZ1/IfAVfd/mntLGE/8ANYaADYADYdKoK2roYsKvO8WMdsPgg7sQLLNHUXXQN/1HIqiTwAqjrPext1wqvduMqfVVndgvDyAmF000rCcLafoVMtO8PZVu1mKXLrm3ebDt4oAnLbVlKkHQAeWDyBEbVv28SRisBbtXr9oG3g0zKV08a3a8y2ycoLNcYtmzSWnXaqPFpiTkS54xN8i6odnY3c/0aXMhJzMcpAaJIjhFYb+Jvi5me5d8VJXMzv4iFSQVDE5lgyInTWtag5JW76luje7Ewdu4Lly4zjw2sjyKjT4zlCT4gI032/CnhsMUfG2RccG1bvKcoWLotX0Qhp1UHymBJkDWJqst4m4s5bjrmKscrMJKmVZoOpB1BOx1FP8Ae7ksfEeXBDnM0uDuLhmWHQzWeyXPPBLRtYuxbTCWruVzcd7wJzDJlt+HACZZnz/a576AZu3ezrdg+GrXDcVij51ARoVTntMOEnbWQVadYqt8dsuTMwQmSgZshaIzFZjNHGsqM10ojXSIOVTdc+HbX2zkX00qqEk+vqLRr02EacqVNokxqJ0O0jgY4elbCDuEE+UECBuZ1jUzA3M6cKdQooQZpU6KoEVnQmJ3PKeNX1/tO2cTjbodgl9cSFBUyxvTlVgCYAJBJn+HrVFTI0/XxHCsJY1LqVOi87F7VW1aRfGe2VxPiuqBj4lvJbUrocrTlZcraeafWHZnbRtW8WLdy5Ya8Ua0tokKhW7nIzAgrCeQGDIOtUoFMjgeFTwIu/77jcy7w3aNpcDcw5e6HfZQqm3K3bVxf4huEgsQSOGkA4cd2szYWzYF66QvieKhkI2Z1dP4iHCkHcCCaqoprE6iemv4UWGN372NzLztztJ2sWUfxBca0gu5y0tbsvdGHBB4w7E84RuOtNilSfoy5WFkuFBzZRmHlJEZpjjFQuOWJJJJMakknQQNTrtp7BUYrKGPag2O2skCQJIEkwBJiSeAqWHHnX7y/wCYVGBHGZ2jSOczvPCKnh/rp95fmKyIfT/eay74W8ttSzlGyqMsk7gDMQJ9TFcD3Ht3Fx9hTbNtVwKhg4+l8TO3kuMQGJABMaCWJjUV6XjMUtpC7mFXcwTGoE6etRS1bcrdAVjHlcQfKeTDcVqUqVBxTd9yv7wdpPY8IoAcz5WB5Ec+BrdwHaC3cwWZRirAjiCR6GYqt71Yd2W0VUtluAnKJgbTHKl3XBzYgnjcPzatblykYpy3+xtdp9ki4xdTDlGTX6plWAniN62Ox7DW7KqwgiZ95rFe7QK3mQiVCBuv8X5VvWrgYBhsa1RlBzdPk2bVdlP2FgoZ7pHFgvvMn8PYau6iiACBtUqyw41jjtKFFRdoE1jzv9gf4v6VlKaToGaitc3n/wCXPoy1ktXCZlCvqQZ9xopp/wDGD5q7+/3ljP5zfIVR5tIgbkzx1jQnlp8TV53+/vLGfzm+QqhroXQxYwvw/U/L30qAaKpC6xVs/wC7/IxBtAAKWBP+2YloVgJBh1IIk+ZTxFFrBo2Kv4duLYi1YZ3YBLoZ/CzMTqCwCmeLgnrS8zz3qSgEgaKNBxIA2mN61LE0qv8At2XcXGBw1i7iLwt2i6KhazazsGuENbSZJzHyl7uQEHykDQU8FhLbLij4J8mYoGZyqBVullN235fE0UqWBVsjLoWBqmtsAdVDD7LTB9YIPxqKrOg1qvG33FozXMK4trcIGRywU5lklYzeUHMBruQAeFYYoorYQIoimG0I019/spUATTpUVQSFFFEVQFFFNQNNY6nYVQI7cPxpUU4oANANEURQg8ukyN4idecxy60qVFBY6y4cHMnLOuvWRWKsuFHnT76/5hUKfTPe0/7He+7+Iqh7q3n8e0kkIcMpK8CQN42B+Ndhi8MtxGRxKsII1HxFU+C7CNnEJcVgba2xbCn6wjjP8Xw9talJbaMZQe9SLm7iFUqGIGYwJ4nlRasKpJVQC28cY41XdurPhffrN2U5OcEkgNpPDU1zeKvE2G6uLMGOsnxWaNCkT6Bvzre7PH0a+35mspdScukxt0p20CiBoK049PtzvInad/Pj9jJy8tEqTGNTTrCPOf8ApHxP5V1SddDAxXroUZ2/8V/H1rX/AH9gxmMo0j+vv91Y8fdzOV5aA9evT8qZwpLEfLmevDT8a+dz6nUZMrWnfEXX5vvfsdEYxS8xag8axC/J8okcTw9nP2Vi02MtGkDUCOf2j0+FSYsdzkX2Zj+A+fpXurI2jRR84d/v7yxn85vkKoavu/o/3li/5x+S1ROBwM7cI4a6etdq6GtgF31Gnrr6UqKYUnYSelUC/X6+NFOlFUBSqVBoAW2SCYMLE6HSdBJ4e2kBTmigFFFOilAUUUzTqgVFOlQBRRTmgFRRTigCgUopxVIKmxmlRUAVmwf9on31/wAwrDWbBj6S399P8woU+pe1MaLNprpEhRsOJJAAnhqRWn2P22t4IGXI7hyFnMCFZl0aBr5Zj15VPvNeZMO7KYIK66Hd1B0Oh04GuewoQiw+ltwWYZQfD/tW0iSVnXpqdBXM+EbErOuxGGDxPAyI4VjweHKFpjUyI9tRxmMKMqgTPP1jStixeDDTgSDWj/XLJ7ovKj7FdjjFw/cPyNb2BclFJ3qGKwYYkgwYI6VkwVsqgB3H51yYMGTHqZSf4Xb+qM5STgvUyXEkRMfrakzhfwA/AUrmbYaDn+QrDl3yn1O7E8uldsnT4RrMS2QCSdySYGrf0H6mskEiNOYUcp4tSdlQiZ1PDc6DVqj4hF0KDptHsJk1xXjxeVcW0uPV+pnTZmtXBmKDh00HSql7rMyFz/EmnLU+751Y2bLeIzHbzfGNvdVXZ3SPtJqfvHnt864dVlyPYpccvj1SaozglyeE9/v7yxn84/IVQV0Hf7+8sZ/OPyWqCvqF0OVhRRRVAUfr9CiigCg/r50UUAwxiOFKpZDE8KjNKJYUqdEUKKnRFFAOlNOgisgAooiipQCinSqgKJopGowFMUAUUAVmwQ+lt/fT/MKw1OxeCOjHXKytA45SDHwqA+ou3cI12yyLEnKROmzA7+yuSxDG0LCMpDw+h0j6U6n+m9X3dfvfhces2bnnAlrT+W4vqvEdRI61bYzA27oAdQY1HMHmCNRXLJWqN8J7XyV/aV0i8o3ELodROY69D1rN2ewztE6zofXcGo9o4RzcVwJAgHmIO/prUezf7RvQ/OvNyOUc6td/sbaThx6E07SMtmEBSPUSY1qyVpE1z63fK+bUCPX63A/hVv2Yfo1gyNenGsdDqpZJuMnfF+/VoxywS5HePF2gcAOPqdz6VrYvFfRqVlQZiImADoOVYO0D9LzPk09p/UVmXILSFxtMAcSZ4DpWvJnnklkxp1S6/qu4UUkmTxtssVOygSSdANVOvurEmNtteAUZix1Y7CAfqitHvJc86CdMsxwmTrFa/ZR+mT1PyNYzmo59qXVq2/sb4YLxb36MvbV4m6RJjURw0j86w4bAE5S2kQQBzBJqwt2FBJA1Os+tV/b3eDDYNM+IuhAfqru7nkiDU/IcYrshot1PK7abfzOVzrofPvf7+8sX/NPyWqCrPvL2guJxd++qlVuuWAaJAgbwSJ0qsr110NAUUURVAUURRFUlhRRRQDmlRTFABpU6VChRRFOoAooomsiWFFFFBYUUUUFlthP3S6FturYZ4C+OHNy0W+1etMMyKftIxCzOUgVp47s69Zu+DctstyYCwTm5FI+uDwIma1a7z9lPb2KXGWcOHd7EODbJzLaUITnQt9RQQogECGOkmsXa5Kjmm7sY4Ln/AHPEZd58J/lE1DBd3MbdOW3hL5IE623UadXAHsr6DxPfDB28SMI136bKzkKCQoVDchmGmbIMwXePWuT77ftBdcLaxPZr27ts3Cl1yjN4ZgFFdTBtlp0zDXTmK1+Iy0eJM/L4fnWOpO5YljqSST6kydOFRrMGTD32RgyMVZTKspKsDzDDUV6f3R/a3ctxbxy+Ku3jIALg++g0f1WD0NeV0xUaTLZ9Xdl9p2cTbF2xcW4h/iUzryI3B6HWtnwVnNGu018r9i9s38Jc8XD3WttpOXZgODqdGHQj0ivYO6f7WbF2ExoFh9vFH9i3Vidbft061plD1L+R1t/CMivOo8sEfeFWXZB+iX2/M1sq4YAgggiQRqCDxB4inbthRAEDkK87DoVhzeJF8VVfrZullco0yo7Q/tOQ8uvPfSpeCz2rYXaG39DE1uXMCGfO2u2npO/PetoAAchWqOgcsmRz6S+fWw8lJUcz3l0uJ9z8TWngsWltxcuMqIklmYhVUQdSToKoO/vfrCpcy2GGIdVg5D9Gpk6NcG/os8jFeXdr9sXsS2a85IGqoNEXqqc+pknia2LQznn39Emjp/yYRwKPej0zvX+1ne3gFB4G/cGn/wCVs6n1aB0NeW47HXLrm5duNcc7u5kn8h0EAVrFqjXsxgkec2M0qKKzIBoFFFQgUUUVQFFFOgFRRRQojQKZFFQBRRRVIBpU6KECig0hQDopGgUA62cDj/BF7y5vGsvYOsFQ7I2Yaa/2YBHEMw41rVB/wqMqNz/5m94tq8GAuWVVUcATCSFz8HIU5ZO6gAzWCzjHQ3CjZPFVkcIAqsjzmTIBAXXQAeWBEQK16KxMh0qKZoBUUUUAUwaVFAdB3X75YzAECzczW51s3JNs88vFD1X2g17T3P8A2iYTHRbnwb5/4VwjzH/tPs/po3Svnaj/AF9vOsHBMtn0p3t784PADLccvdiRZt6ueWbgg6sROsTXivezv9jO0JRm8Kwf+DbJgjlcfQv6aDpXLO5JJJJJMkkkknmSdSetZQKsYEbEop0UVtSMbCiiigsKKKKCwooooQdKiigCiiihbCiiigsKKKKCwooooQ//2Q==",
        tags: ["Fiction", "Philosophy", "Fantasy"],
        color: "#c1bbdd",
    },
    {
        type: "Movie",
        title: "La La Land",
        oneLiner: "Dreams vs. Love, painted in jazz.",
        rating: 4,
        fullContent: "A dazzling musical that captures the bittersweet dance between ambition and romance — visually stunning and emotionally rich.",
        image: "data:image/jpeg;base64,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",
        tags: ["Musical", "Romance", "Drama"],
        color: "#c1e7e3",
    }
    ])

    const [editingIndex, setEditingIndex] = useState(null);

    const [form, setForm] = useState({
        type: "",
        title: "",
        oneLiner: "",
        rating: 0,
        fullContent:"",
        image: "",
        tags: [],
        color: "#ffffff",
    })

    const handleDelete = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
    };

    // Update a post
    const handleUpdate = (index) => {
    // Prefill the form with selected post data and open popup
    setForm(posts[index]);
    setEditingIndex(index);
    setPopup(true);
    };

    const handleChange= (e)=>{
        const {name,value}= e.target
        setForm({...form,[name]:value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        if(editingIndex!==null){
            const updatedPosts = [...posts];
            updatedPosts[editingIndex] = form;
            setPosts(updatedPosts);
            setEditingIndex(null);
        }
        else{
            setPosts([...posts,form])
        }
        setForm({type:"",title:"",oneLiner:"",rating:0, fullContent: "", image:"", tags:[], color: "#ffffff"})
        setPopup(false)
    }

  return (
    <div className='flex'>
        <Navbar/>
        <div className='flex-1 ml-72 h-screen overflow-y-auto p-10 text-amber-800 bg-gradient-to-br from-[#3b2f2f] via-[#5c3d2e] to-[#9d6b53]'>
            {/* add button */}
            <h1 className='font-bold text-center text-3xl mt-3 mb-5 text-amber-200'>Movie/Book/Podcast Reviews</h1>
            <button onClick={()=> setPopup(true)} className='fixed bottom-10 right-10  text-3xl rounded-full w-14 h-14 shadow-lg hover:bg-amber-600 bg-amber-200 text-gray-900 transition-all'>+</button>
            {/* posts grid */}
            {/* <div className='grid grid-cols-1 gap-6'>
                {posts.map((post,index)=>(<Postcard key={index}{...post} onDelete={()=> handleDelete(index)} onUpdate={()=> handleUpdate(index)} />))}
            </div> */}
            <div className="grid grid-cols-1 gap-6 p-5">
                {posts.map((post, index) => (
                    <Postcard
                    key={index}
                    {...post}
                    onDelete={() => handleDelete(index)}
                    onUpdate={() => handleUpdate(index)}
                    />
                ))}
            </div>

            {/* popup modal */}
            {popup && (
                <div className='fixed inset-0 bg-blue-200 ml-72 bg-opacity-40 flex items-center justify-center'>
                    <div className="bg-fuchsia-100 p-6 rounded-xl shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-3 text-center font-mono">Add Review</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                            name="type"
                            placeholder="Category (Book/Movie/Podcast)"
                            value={form.type}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                            name="oneLiner"
                            placeholder="One-liner"
                            value={form.oneLiner}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                            name="rating"
                            type="number"
                            placeholder="Rating (1–5)"
                            value={form.rating}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                                name="fullContent"
                                placeholder="Full content / description"
                                value={form.fullContent}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            />

                            <input
                                name="image"
                                placeholder="Image URL"
                                value={form.image}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            />

                            <input
                                name="tags"
                                placeholder="Tags (comma separated)"
                                value={form.tags.join(',')}
                                onChange={(e) => setForm({ ...form, tags: e.target.value.split(',') })}
                                className="border p-2 rounded"
                            />
                            <div className="flex items-center gap-3">
                                <label className="text-sm font-mono">Card Color:</label>
                                <input
                                    type="color"
                                    name="color"
                                    value={form.color}
                                    onChange={handleChange}
                                    className="w-10 h-10 border-3 border-gray-600 rounded cursor-pointer"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setPopup(false)}
                                className="px-3 py-1 bg-blue-300 font-mono rounded">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1 bg-amber-300 font-mono rounded">
                                {editingIndex!==null? 'Save' : 'Add'}
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Post
