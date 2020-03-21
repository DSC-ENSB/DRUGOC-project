<section className="box meds-name">
                <h4 style={{'paddingTop':20}}>Medicaments</h4>
            {this.state.medicament.map((drug,index) => (
            <div>
            <input
            placeholder="   DCI Name"
            required={true}
            onFocus={() => this.isFocused(index)}
            className="pharmaInput"
            key={index}
            value={drug.DCI}
            onChange={event => {
              this.state.medicament[index].DCI = event.target.value;
              this.setState([...this.state.medicament]);
            }}
            />
            <br></br>
            </div>
            ))}
                <br></br>
                <FaPlus 
                className="med-add-button"
                onClick={this.addMedicament}
                />
            </section>
            