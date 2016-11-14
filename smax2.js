


        var a;
        var N;
        var Eb;
        var den;
        var b;
        var s;
        var d1;
        var n1;
        var d2;
        var n2;
        var U;
        var s1;
        var s2;
        var s0;
        var x;
        var y;
        var z;
        var w;
        var fi;
        var f;
        var u;
        var smax;
		var nengine;
		var sigma;




        function setValues() {
			sigma = Number(document.getElementById("sigma").value);
			nengine = Number(document.getElementById("nengine").value);
            a = Number(document.getElementById("a").value);
            N = Number(document.getElementById("N").value);
            Eb = Number(document.getElementById("Eb").value);
            den = Number(document.getElementById("den").value);
            b = Number(document.getElementById("b").value);
            s = Number(document.getElementById("s").value);
            d1 = Number(document.getElementById("d1").value);
            n1 = Number(document.getElementById("n1").value);
            d2 = Number(document.getElementById("d2").value);
            n2 = Number(document.getElementById("n2").value);
			


        }
        function UCalculation() {
            setValues();
            U = (71620 * 2 * N * nengine) / ((d1 / 10) * n1);
        }
        function uLowerCalculation() {
            setValues();
            u = (Math.PI * d1 * n1) / 60000;
        }
        function xCalculation() {
            setValues();
            x = Math.PI - (2 * (Math.asin((d2 - d1) / (2 * a))));
        }
        function fiCalculation() {
            setValues();
            fi = 57.29 * x;
        }
        function fCalculation() {
            setValues();
            f = 0.3 + (u / 100);
        }
        function yCalculation() {
            setValues();
            y = f * x;
        }
        function zCalculation() {
            setValues();
            z = Math.E;
        }
        function wCalculation() {
            setValues();
            w = Math.pow(z, y);
        }
        function s2Calculation() {
            setValues();
            s2 = (U / (w - 1));
        }
        function s1Calculation() {
            setValues();
            s1 = (s2 * w);
        }
        function s0Calculation() {
            setValues();
            s0 = (s1 + s2) / 2;
        }

        function smax() {
            setValues();
            UCalculation();
            uLowerCalculation();
            xCalculation();
            fiCalculation();
            fCalculation();
            yCalculation();
            zCalculation();
            wCalculation();
            s2Calculation();
            s1Calculation();
            s0Calculation();

            smaxResult = (s0 / (b * s)) + (U / (2 * b * s)) + ((den * Math.pow(u, 2)) / 9810) + (Eb * (s / d1));
            console.log(smaxResult);
            var smaxResult2 = smaxResult.toFixed(3)
			var elem = document.getElementById('smaxResult');
			if(smaxResult<sigma){
			
            elem.innerHTML = "Η μέγιστη τάση είναι: " + smaxResult2 + "<σ(επ)  <span>Ο ιμάντας αντέχει!";
			elem.querySelector('span').classList.add("green");
			} else{
			elem.innerHTML = "Η μέγιστη τάση είναι: " + smaxResult2 + ">σ(επ)  <span>Ο ιμάντας δεν αντέχει!";
			elem.querySelector('span').classList.add("red");
			}
			
			
        }

        function clearInputs() {
            var elements = document.getElementsByTagName("input");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].type == "text") {
                    elements[i].value = '';
                }
            }
        }

    

  
