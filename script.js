function flames() 
            {
                let name1 = document.getElementById('name1').value.toLowerCase();
                let name2 = document.getElementById('name2').value.toLowerCase();
                if(name1.length==0 || name2.length==0)
                {
                    var resultElement = document.getElementById("res");
                    var txt = document.createTextNode("Please Enter Names");
                    resultElement.appendChild(txt);
                }
                else{
                let i = 0;
                while (i < name1.length) {
                    const ch = name1.charAt(i);
                    const idx = name2.indexOf(ch);
                    if (idx !== -1) {
                        name2 = name2.slice(0, idx) + name2.slice(idx + 1);
                        name1 = name1.slice(0, i) + name1.slice(i + 1);
                    } else {
                        i++;
                    }
                }

                const fname = name1 + name2;
                const list = ["Friend", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
                const list2 = ["👨‍🤝‍👩", "😍", "💝", "🧑‍❤️‍💋‍👩", "😡", "🥰"];
                const index = fname.length % list.length;

                console.log(name1 + " " + name2);

                var resultElement = document.getElementById('res');
                var txt = document.createTextNode(list[index] + " " + list2[index]);
                resultElement.textContent = "Relationship : ";
                resultElement.appendChild(txt);
                }
            }