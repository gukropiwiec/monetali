import { Component } from '@angular/core';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
    total = 0;
    totalAnual = 0;
    todosChecked = false;

    limparInputs() {
        if (!(document.getElementById('switch-inss') as HTMLInputElement).checked) (document.getElementById('input-inss') as HTMLInputElement).value = '0';
        if (!(document.getElementById('switch-pis') as HTMLInputElement).checked) (document.getElementById('input-pis') as HTMLInputElement).value = '0';
        if (!(document.getElementById('switch-cofins') as HTMLInputElement).checked) (document.getElementById('input-cofins') as HTMLInputElement).value = '0';
        if (!(document.getElementById('switch-irpj') as HTMLInputElement).checked) (document.getElementById('input-irpj') as HTMLInputElement).value = '0';
        if (!(document.getElementById('switch-csll') as HTMLInputElement).checked) (document.getElementById('input-csll') as HTMLInputElement).value = '0';
        if (!(document.getElementById('switch-ipi') as HTMLInputElement).checked) (document.getElementById('input-ipi') as HTMLInputElement).value = '0';
    }

    calcular() {
        this.limparInputs();
        if (!this.todosChecked) {
            const valorInss = Number((document.getElementById('input-inss') as HTMLInputElement).value);
            const valorPis = Number((document.getElementById('input-pis') as HTMLInputElement).value);
            const valorCofins = Number((document.getElementById('input-cofins') as HTMLInputElement).value);
            const valorIrpj = Number((document.getElementById('input-irpj') as HTMLInputElement).value);
            const valorCsll = Number((document.getElementById('input-csll') as HTMLInputElement).value);
            const valorIpi = Number((document.getElementById('input-ipi') as HTMLInputElement).value);
        
            this.total = valorInss + valorPis + valorCofins + valorIrpj + valorCsll + valorIpi;

            this.totalAnual = (valorPis + valorCofins + valorIrpj + valorCsll + valorIpi) * 12 + valorInss * 13;
        } else {
            this.total = Number((document.getElementById('input-todos') as HTMLInputElement).value);
            this.totalAnual = Number((document.getElementById('input-todos') as HTMLInputElement).value) * 12;
        }
        this.limparInputs();
    }

    changeSwitch(tipo: string) {
        if (tipo == 'todos') {
            this.todosChecked = !this.todosChecked;
            (document.getElementById('switch-inss') as HTMLInputElement).checked = false;
            (document.getElementById('switch-pis') as HTMLInputElement).checked = false;
            (document.getElementById('switch-cofins') as HTMLInputElement).checked = false;
            (document.getElementById('switch-irpj') as HTMLInputElement).checked = false;
            (document.getElementById('switch-csll') as HTMLInputElement).checked = false;
            (document.getElementById('switch-ipi') as HTMLInputElement).checked = false;
            document.getElementById('ig-inss')?.classList.add('d-none');
            document.getElementById('ig-pis')?.classList.add('d-none');
            document.getElementById('ig-cofins')?.classList.add('d-none');
            document.getElementById('ig-irpj')?.classList.add('d-none');
            document.getElementById('ig-csll')?.classList.add('d-none');
            document.getElementById('ig-ipi')?.classList.add('d-none');
            document.getElementById(`ig-${tipo}`)?.classList.toggle('d-none');
            return;
        }
        return document.getElementById(`ig-${tipo}`)?.classList.toggle('d-none');
    }
}
